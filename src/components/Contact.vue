<template>
  <div class="contact">
    <div class="contactInfo">
      <p>{{ contact.name }}</p>
      <p>{{ contact.email }}</p>
    </div>
    <div class="btns">
      <button @click="$emit('onDelete', contact.id)">delete</button>
      <router-link :to="{ path: `/add/${contact.id}` }">edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: ["contact"],
};
</script>

<style scoped>
.contact {
  display: flex;
  background-color: #fff;
  margin: 1rem auto;
  min-width: 40vw;
  max-width: 90vw;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.btns > button {
  text-decoration: none;
  background-color: #fff;
  color: red;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0 1rem;
  cursor: pointer;
  border: 1px solid red;
}

.btns > a {
  text-decoration: none;
  background-color: blue;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0 1rem;
}
</style>