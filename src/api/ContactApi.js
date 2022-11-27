import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const API_CONTACTS_SHOW = async (perPage, page) => {
  return await apiClient.get('/contacts?_limit=' + perPage + '&_page=' + page).then(response => { return response })
}

export const API_CONTACT_SHOW = async (id) => {
  return await apiClient.get('/contacts/' + id).then(response => { return response})
}
