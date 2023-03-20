/**
 * This file will export prisma rawQuery ability, for example
 * const db1 = createPrismaSDK('1')
 * export const prisma = {
 *   db1: db1
 * }
 *
 * Then you can use it outside for example:
 * @example
 * prisma.db1.queryRaw(`SELECT * from Pet`, {}).then(console.log).catch(console.error)
 */
import fetch from '@web-std/fetch'
import { JSONObject } from './models'

export type PrismaDataSource = {
  queryRaw<T = unknown>(query: string, values: JSONObject): Promise<T>
}

export type PrismaQueryRawResult = {
  data: {
    queryRaw: {
      [key: string]: {
        prisma__type: string
        prisma__value: any
      }
    }[]
  }
} | {
  errors: {
    error: string
    user_facing_error: {
      error_code: string
      is_panic: boolean
      message: string
      meta?: {
        code: string
        message: string
      }
    }
  }[]
}

function flattenPrismaResult(raw: PrismaQueryRawResult) {
  if ('data' in raw) {
    return raw.data.queryRaw.map(item => {
      return Object.keys(item).reduce<Record<string, any>>((obj, key) => {
        obj[key] = item[key].prisma__value
        return obj
      }, {})
    })
  } else {
    throw new Error(raw.errors.map(e => e.error).join('\n'))
  }
}

function createPrismaSDK(dataSourceId: string | number): PrismaDataSource {
  const queryRaw = function <T = unknown>(sql: string): Promise<T> {
    const body = {
      operationName: 'queryRaw',
      variables: {},
      query: `mutation queryRaw{
  queryRaw(
    query: "${sql}"
    parameters: "[]"
  )
}`
    }
    return fetch(`http://localhost:9123/api/v1/model/graphql/${dataSourceId}`, {
      "headers": {
        "content-type": "application/json",
      },
      "body": JSON.stringify(body),
      "method": "POST"
    }).then(resp => resp.json()).then(res => {
      return flattenPrismaResult(res) as T
    })
  }
  return { queryRaw }
}

const grace = createPrismaSDK('1442189468237824')
const chatGPT = createPrismaSDK('1464058506903552')

export const prisma = {
  "grace" : grace,
  "chatGPT" : chatGPT,
}