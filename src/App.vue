<template>
  <div>
    <div class="mw6 center pl2 pr2 pt2 sans-serif">
      <div class="ml2 history flex justify-between">
        <button class="f6 black-70" @click="$router.push({ name: 'ContactList' })">back</button>
        <router-link class="pa2 mr1 normal" :to="{ name: 'ContactCreate' }">+</router-link>
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