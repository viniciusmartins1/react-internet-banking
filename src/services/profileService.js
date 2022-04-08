import { api } from './apiIntegration'

async function getDataProfile() {
  return await api.get('/usuario/me')
}

export {getDataProfile}