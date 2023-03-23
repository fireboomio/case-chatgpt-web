import { writeFile, readdir, stat, mkdir,  } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { NodeJSOperation, OperationTypes } from 'fireboom-wundersdk/dist/operations/operations'
import zodToJsonSchema from "zod-to-json-schema"
import { rmSync } from 'node:fs'

type OperationItem = {
  tsPath: string
  variablesSchema?: string
  // interpolationVariablesSchema: string
  responseSchema?: string
  operationType: number
  liveQueryConfig?: {
    enable: boolean
    pollingIntervalSeconds: number
  }
  internal: boolean
  authenticationConfig?: {
    authRequired: boolean
  }
  authorizationConfig?: {
    claims: [],
    roleConfig: {
      requireMatchAll: string[]
      requireMatchAny: string[]
      denyMatchAll: string[]
      denyMatchAny: string[]
    }
  }
}

const OPERATION_TYPE_MAP = {
  'query': 0,
  'mutation': 1,
  'subscription': 2
} as const

async function readDir(rootPath: string, ...dirPath: string[]) {
  const ret: OperationItem[] = []
  const files = await readdir(join(rootPath, ...dirPath))
  for (const file of files) {
    const filePath = join(rootPath, ...dirPath, file)
    const stats = await stat(filePath)
    if (stats.isDirectory()) {
      ret.push(...await readDir(rootPath, ...dirPath, file))
    } else if (stats.isFile()) {
      if (parse(file).ext !== '.ts') {
        continue
      }
      const tsOperation = (await import(filePath)).default as NodeJSOperation<any, any, any, OperationTypes, any, any, any, any, any, any>
      ret.push({
        internal: tsOperation.internal,
        operationType: OPERATION_TYPE_MAP[tsOperation.type],
        tsPath: join(...dirPath, file),
        variablesSchema: JSON.stringify(tsOperation.inputSchema ? zodToJsonSchema(tsOperation.inputSchema) : { type: 'object', properties: {} },),
        responseSchema: JSON.stringify(tsOperation.responseSchema ? zodToJsonSchema(tsOperation.responseSchema) : { type: 'object', properties: {} },),
        liveQueryConfig: tsOperation.liveQuery,
        authenticationConfig: {
          authRequired: tsOperation.requireAuthentication ?? (tsOperation.rbac ? Object.keys(tsOperation.rbac).some(key => tsOperation.rbac[key as keyof typeof tsOperation.rbac].length) : false)
        },
        authorizationConfig: tsOperation.rbac ? {
          claims: [],
          roleConfig: tsOperation.rbac
        } : undefined
      })
    }
  }
  return ret
}

async function writeTsOperationsConfig() {
  const operations = await readDir(join(__dirname, '../operations'))
  const tsOperationConfigDir = join(__dirname, '../../exported/.operations')
  rmSync(tsOperationConfigDir, { force: true, recursive: true })
  await mkdir(tsOperationConfigDir)
  for (const operation of operations) {
    const dirPath = operation.tsPath.split('/')
    const fileName = dirPath.pop()!
    await mkdir(join(tsOperationConfigDir, ...dirPath), { recursive: true })
    await writeFile(join(tsOperationConfigDir, ...dirPath, `${parse(fileName).name}.config.json`), JSON.stringify(operation, null, 2), 'utf-8')
  }
}

writeTsOperationsConfig()
