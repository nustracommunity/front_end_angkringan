<template>
  <q-page class="flex flex-center">
    <q-form @submit="onRegister">
      <q-input v-model="name" label="Name" />
      <q-input v-model="email" label="Email" type="email" />
      <q-input v-model="password" label="Password" type="password" />
      <q-btn label="Register" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { api } from "boot/axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onRegister() {
      try {
        await api.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$q.notify({
          type: "positive",
          message: "Registration successful!",
        });
        this.$router.push("/login");
      } catch (error) {
        this.$q.notify({ type: "negative", message: "Registration failed!" });
      }
    },
  },
};
</script>
