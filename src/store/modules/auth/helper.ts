// const LOCAL_NAME = 'SECRET_TOKEN'
let _token: string | null

export function getToken() {
  return _token
}

export function setToken(token: string) {
  return _token = token
}

export function removeToken() {
  return _token = null
}
