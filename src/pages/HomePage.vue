<template>
  <div>
    <search @onSearch="searchHandler" />

    <contact-list :contacts="clonedContacts" @onDelete="deleteHandler" />

    <router-link class="addNewContact" to="/add">add new contact</router-link>
  </div>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import Search from "../components/Search.vue";
export default {
  components: { Search, ContactList },
  name: "HomePage",
  data() {
    return {
      contacts: [],
      clonedContacts: [],
      searchValue: "",
    };
  },
  methods: {
    deleteHandler: function (id) {
      this.contacts = this.contacts.filter((item) => item.id !== id);
    },
    filterSearch: function (value) {
      const filteredContacts = this.contacts.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      this.clonedContacts = filteredContacts;
    },
    searchHandler: function (value) {
      this.filterSearch(value);
      this.searchValue = value;
    },
  },
  mounted() {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.contacts = storedContacts;
  },
  watch: {
    contacts() {
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      this.filterSearch(this.searchValue);
    },
    searchValue() {
      this.filterSearch(this.searchValue);
    },
  },
};
</script>

<style scoped>
.addNewContact {
  text-decoration: none;
  margin: 2rem auto;
  display: block;
  background-color: blue;
  color: #fff;
  width: 20vw;
  padding: 0.5rem;
  border-radius: 5px;
}
</style>