<template>
  <li class="flex items-center lh-copy pa3 ph0-l mt2 b--black-10">
    <img class="w2 h2 w3-ns h3-ns br-100"
      src="https://cdn2.iconfinder.com/data/icons/avatar-profile/476/profile_avatar_contact_account_user_default-512.png" />
    <div class="pl3 flex-auto">
      <span class="f6 db black-70">{{ user.name }}</span>
      <span class="f6 db black-70">{{ user.email }}</span>
    </div>
    <div>
      <a href="tel:" class="f6 link blue hover-dark-gray">{{ user.number }}</a>
    </div>
    <div class="pl3 flex-auto">
      <button @click="deleteContact" class="">Delete</button>
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
    this.showContact(this.contact.id);
  },
  methods: {
    ...mapActions({
      showContact: "showContact",
      deleteContact: "deleteContact"
    }),
  }
};
</script>