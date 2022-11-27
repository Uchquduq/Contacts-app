<template>
  <router-link class="contact-link" @click="this.$store.dispatch('showContact', contact.id)"
    :to="{ name: 'ContactDetails', params: { id: contact.id } }">
    <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100"
        src="https://cdn2.iconfinder.com/data/icons/avatar-profile/476/profile_avatar_contact_account_user_default-512.png" />
      <div class="pl3 flex-auto">
        <span class="f6 db black-70">{{ contact.name }}</span>
        <span class="f6 db black-70">{{ contact.email }}</span>
      </div>
      <div>
        <a href="tel:" class="f6 link blue hover-dark-gray">{{ contact.phone }}</a>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  props: ["contact"],
  name: 'UserContact',
};
</script>