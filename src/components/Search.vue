<template>
  <div class="search">
    <input type="text" placeholder="Search ..." v-model="value" />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value() {
      this.$emit("onSearch", this.value);
    },
  },
};
</script>

<style scoped>
.search > input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1.6rem;
  border-radius: 5px;
}
</style>