import { createStore } from 'vuex'
import ContactService from "@/services/ContactService"

export default createStore({
  state: {
    contacts: [],
    contact: {}
  },
  getters: {
    contact(state) {
      return state.contact
    },
    contacts(state) {
      return state.contacts
    }
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
    SET_CONTACT(state, contact) {
      state.contact = contact
    }
  },
  actions: {
    showContacts({ commit }) {
      return ContactService.getContacts().then(response => {
        commit('SET_CONTACTS', response.data)
        console.log(response.data)
      }).catch(error => {
        throw error
      })
    },
    showContact({ commit }, id) {
      return ContactService.getContact(id).then(response => commit('SET_CONTACT', response.data))
    },
    deleteContact({ commit }, id) {
      return ContactService.deleteContact(id).then(response => commit('SET_CONTACT', response.data))
    },
    updateContact({ commit }, id, data) {
      return ContactService.putch(id, data).then(response => {
        commit('SET_CONTACT', response.data)
      })
    }
  }
})