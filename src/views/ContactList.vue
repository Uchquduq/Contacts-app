<template>
  <div class="mw6 center pl3 pr3  sans-serif">
    <form class="black-80">
      <div class="measure">
        <input id="name" class="pa2 pl3 input-reset ba bg-transparent hover-bg-black hover-white w-100 mt3 mb2 "
          type="text" aria-describedby="name-desc" placeholder="Search" v-model="search">
      </div>
    </form>

    <ul class="list pl0 mt0 measure center">
      <Contact v-for="contact in searched" :key="contact.id" :contact="contact" />
    </ul>

  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Contact
  },
  data() {
    return {
      search: '',
      error: "",
      state: "loading"
    };
  },
  methods: {
    ...mapActions({
      showContacts: 'showContacts'
    }),
  },
  computed: {
    ...mapGetters(
      ['contacts']
    ),
    searched() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    this.$store.dispatch('showContacts')
  },
};
</script>

<style>
input:focus {
  outline: none;
}
</style>