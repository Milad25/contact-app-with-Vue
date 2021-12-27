<template>
  <div class="addContact">
    <h3>Add new contact</h3>
    <form @submit.prevent="submitHandler" class="addContactForm">
      <div class="formControl">
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div class="formControl">
        <label>email</label>
        <input type="text" v-model="email" />
      </div>

      <button type="submit" v-if="paramId">Update</button>
      <button type="submit" v-else>Add</button>
    </form>
    <router-link to="/">Go home</router-link>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  props: ["paramId"],
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    submitHandler: function () {
      if (this.name.trim() === "" || this.email.trim() === "") {
        alert("Please fill all the fields!");
      } else {
        const dataObj = {
          id: Date.now(),

          name: this.name,
          email: this.email,
        };

        const storedContacts =
          JSON.parse(localStorage.getItem("contacts")) || [];

        if (!this.paramId) {
          localStorage.setItem(
            "contacts",
            JSON.stringify([...storedContacts, dataObj])
          );

          this.$vToastify.setSettings({
            position: "top-right",
            theme: "light",
            successDuration: 2000,
          });
          this.$vToastify.success("Contact added successfully");

          this.name = "";
          this.email = "";
        } else {
          const editedContact = storedContacts.find(
            (item) => item.id === parseInt(this.paramId)
          );

          editedContact.name = this.name;
          editedContact.email = this.email;

          const index = storedContacts.findIndex(
            (item) => item.id === editedContact.id
          );

          storedContacts.splice(index, 1);

          localStorage.setItem(
            "contacts",
            JSON.stringify([
              ...storedContacts,
              { id: editedContact.id, name: this.name, email: this.email },
            ])
          );

          this.$vToastify.setSettings({
            position: "top-right",
            theme: "light",
            successDuration: 2000,
          });
          this.$vToastify.success("Contact updated successfully");
        }
      }
    },
  },

  mounted() {
    if (this.paramId) {
      const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const editedContact = storedContacts.find(
        (item) => item.id === parseInt(this.paramId)
      );

      this.name = editedContact.name;
      this.email = editedContact.email;
    }
  },
};
</script>

<style scoped>
.addContactForm {
  background-color: #fff;
  margin: 2rem auto;
  min-width: 40vw;
  max-width: 90vw;
  border-radius: 10px;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.formControl > input {
  border: 1px solid #ccc;
  font-size: 1.6rem;
  border-radius: 5px;
  margin: 0.5rem 1rem;
}

.formControl > label {
  font-weight: 700;
}

.addContactForm > button {
  text-decoration: none;
  background-color: green;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 1rem;
  cursor: pointer;
}
</style>