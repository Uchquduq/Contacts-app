import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getContact(id) {
    return apiClient.get('/contacts/' + id)
  },
  getContacts() {
    return apiClient.get('/contacts')
  },
  deleteContact(id) {
    return apiClient.delete('/contacts/' + id)
  },
  updateContact(id, data) {
    return apiClient.patch('/contacts/' + id, data)
  }
}
