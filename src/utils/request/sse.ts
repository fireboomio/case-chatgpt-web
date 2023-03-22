export async function* streamAPI<TSource extends Record<string, any> = any, TResponse = any>(url: string, {
  method = 'get',
  params,
  controller,
}: {
  method?: 'get' | 'post'
  params?: TSource
  controller?: AbortController
}) {
  const query = new URLSearchParams({ wg_sse: 'true' })
  const config: RequestInit = {
    signal: controller?.signal,
  }
  if (method.toLowerCase() === 'get') {
    if (params)
      Object.keys(params).forEach(key => query.append(key, params[key]))
  }
  else {
    if (params)
      config.body = JSON.stringify(params)
  }

  const resp = await fetch(`/operations${url}?${query.toString()}`, config)
  if (resp.ok) {
    // 使用yield以流的方式读取
    const reader = resp.body!.getReader()

    while (true) {
      const { value, done } = await reader!.read()
      if (done)
        break
      const lines = new TextDecoder().decode(value).split('\n').map(line => line.substring(6)).filter(Boolean)
      for (const line of lines) {
        try {
          yield JSON.parse(line) as TResponse
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.log(line)
        }
      }
    }
  }
  else { throw new Error(resp.statusText) }
}
