<template>
  <div>
    <form class="measure center" @submit.prevent="createContact">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="name">Name</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"
            v-model="user.name" id="name">
        </div>
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">Email</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"
            name="email-address" v-model="user.email" id="email-address">
        </div>
        <div class="mv3">
          <label class="db fw6 lh-copy f6" for="phone">Phone</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="phone"
            id="phone" v-model="user.phone">
        </div>
      </fieldset>
      <div class="">
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Save">
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactCreate",
  props: ["contact"],
  data: () => ({
    user: {
      name: null,
      email: null,
      phone: null
    }
  }),
  methods: {
    async createContact() {
      try {
        const user = await axios.post(
          "http://localhost:3000/contacts",
          {
            name: this.user.name,
            email: this.user.email,
            phone: this.user.phone
          }
        );
        this.$router.push({ name: 'ContactList' })
        console.log(user.data);
        alert("User updated!");
      } catch (e) {
        console.log(e);
      }
    },
  }
};
</script>