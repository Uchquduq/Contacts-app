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
    },
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact)
    }
  },
  actions: {
    showContacts({ commit }) {
      ContactService.getContacts().then(response => {
        commit('SET_CONTACTS', response.data)
      }).catch(error => {
        throw error
      })
    },
    showContact({ commit }, id) {
      ContactService.getContact(id).then(response => commit('SET_CONTACT', response.data))
    },
    createContact({ commit }, contact) {
      ContactService.postContact(contact)
        .then(
          commit('ADD_CONTACT', contact)
        )
        .catch(error => {
          throw (error);
        })
    },
    deleteContact({ commit }, id) {
      ContactService.deleteContact(id).then(response => commit('SET_CONTACT', response.data))
    },
    async updateContact({ commit }, id, data) {
      try {
        const response = await ContactService.updateContact(id, data)
        commit('SET_CONTACT', response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})