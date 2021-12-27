<template>
  <div>
    <div v-for="item in contacts" :key="item.id">
      <contact :contact='item' @onDelete="$emit('onDelete', item.id)" />
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  name: "ContactList",
  props: ["contacts"],
  components: {
    Contact,
  },
};
</script>

<style scoped>
</style>