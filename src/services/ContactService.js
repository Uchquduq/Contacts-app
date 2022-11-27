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
  postContact(contact) {
    return apiClient.post('/contacts', contact)
  },
  deleteContact(id) {
    return apiClient.delete('/contacts/' + id)
  },
  updateContact(id, contact) {
    return apiClient.patch('/contacts/' + id, contact)
  }
}
