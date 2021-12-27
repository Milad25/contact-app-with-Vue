<template>
  <div>
    <add-contact :paramId="$route.params.id" />
  </div>
</template>

<script>
import AddContact from "../components/AddContact.vue";
export default {
  components: { AddContact },
  name: "AddPage",
};
</script>

<style scoped>
</style>