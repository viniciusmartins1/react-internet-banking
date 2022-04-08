import { api } from './apiIntegration'

async function getList() {
  return await api.get('/co-titular')
}

async function postNew(coOwner) {
  return await api.post('/co-titular', coOwner)
}

export {getList, postNew}