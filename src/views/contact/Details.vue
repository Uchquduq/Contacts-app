<template>
  <li class="flex items-center lh-copy ph0-l mt4 b--black-10">
    <img class="w2 h2 w3-ns h3-ns br-100 mr3"
      src="https://cdn2.iconfinder.com/data/icons/avatar-profile/476/profile_avatar_contact_account_user_default-512.png" />
    <div class="pl3 flex-auto">
      <span class="f6 db black-70">{{ user.name }}</span>
      <span class="f6 db black-70">{{ user.email }}</span>
    </div>
    <div>
      <a href="tel:" class="f6 link blue hover-dark-gray">{{ user.number }}</a>
    </div>
    <div>
      <button @click="deleteContact(user.id)"
        class="f5 no-underline gray bg-white hover-bg-black hover-white inline-flex items-center pr3 pl3 pt2 pb2 ba border-box">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "ContactDetails",
  props: ['contact'],
  computed: {
    ...mapGetters({
      user: 'contact'
    })
  },
  created() {
    this.showContact(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      showContact: "showContact",
    }),
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
        .then((response) => {
          alert("Contact deleted", response)
          this.$store.dispatch('showContacts')
          this.$router.push({ name: 'ContactList' })
        })
    }
  }
};
</script>