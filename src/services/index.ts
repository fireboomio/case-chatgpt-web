import { createClient } from './client'

export default createClient({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
})
