<template>
  <div class="mw6 center pa3 sans-serif">
    <div v-if="contact">
      <h1 class="normal">{{ contact.name }}</h1>
      <div id="nav">
        <router-link :to="{ name: 'ContactDetails' }">Details</router-link> |
        <router-link :to="{ name: 'ContactEdit' }">Edit</router-link>
      </div>
      <router-view :contact="contact"></router-view>
    </div>
  </div>
</template>

<script>
import ContactService from "@/services/ContactService";
export default {
  name: "ContactLayout",
  props: ["id"],
  data: () => ({
    contact: null,
  }),
  created() {
    ContactService.getContact(this.id)
      .then((response) => (this.contact = response.data))
      .catch((error) => {
        throw error
      });
  },
};
</script>

<style lang="css">
a {
  font-weight: normal;
  color: #a1a1a1;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #060606;
}
</style>