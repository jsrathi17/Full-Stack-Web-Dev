import axios from 'axios'


const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteId = personId => {
  const url = `${baseUrl}/${personId}`
  const request = axios.delete(url)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteId: deleteId
}