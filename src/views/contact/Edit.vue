<template>
  <div>
    <form class="measure center" @submit.prevent="update()">
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
        <input
          class="f5 no-underline gray bg-white hover-bg-black hover-white inline-flex items-center pr3 pl3 pt2 pb2 ba"
          type="submit" value="Save">
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "ContactEdit",
  computed: {
    ...mapGetters({ user: 'contact' })
  },
  mounted() {
    this.showContact(this.$route.params.id).then((data) => {
      console.log(data)
    })
  },
  methods: {
    ...mapActions([
      'showContact',
    ]),
    update() {
      const data = {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      }
      this.$store.dispatch('updateContact', data)
        .then(con => {
          console.log(con)
          alert(`Contact: ${this.user.name} succesfully updated!`)
          this.$router.push({ name: 'ContactDetails' })
        })
    }
  }
};
</script>