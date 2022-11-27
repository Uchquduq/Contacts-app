<template>
  <div class="mw6 center pl3 pr3  sans-serif">
    <form class="pa1 black-80">
      <div class="measure">
        <input id="name" class="input-reset ba b--black-20 pa2 mb2 mt3 db w-100" type="text"
          aria-describedby="name-desc" placeholder="Search" v-model="search">
      </div>
    </form>
    <p v-if="state == 'error'" class="orange">{{ error }}</p>
    <ul class="list pl0 mt0 measure center" v-else-if="state == 'ready'">
      <Contact v-for="contact in contacts" :key="contact.id" :contact="contact" />
    </ul>
    <p v-else-if="state == 'loading'">Loading contacts...</p>
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
  },
  created() {
    this.$store.dispatch('showContacts')
      .then(() => this.state = 'ready')
  },
};
</script>