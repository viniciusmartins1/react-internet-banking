import { api } from './apiIntegration'

async function requestLogin(username, senha) {
  return await api.post('/usuario/auth', {username, senha})
}

export {requestLogin}