<template>
  <div>
    <div class="mw6 center pl2 pr2 pt2 sans-serif">
      <div class="ml2 history flex justify-between">
        <button
          class="f5 no-underline gray bg-white hover-bg-black hover-white inline-flex items-center pr3 pl3 pt2 pb2 ba"
          @click="$router.push({ name: 'ContactList' })">Back</button>
        <router-link
          class="ml1 f5 no-underline gray bg-white hover-bg-black hover-white inline-flex items-center pt2 pb2 pl3 pr3 ba mr2 normal"
          :to="{ name: 'ContactCreate' }">Add +</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>