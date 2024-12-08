<template>
  <q-page class="flex flex-center">
    <q-form @submit="onLogin">
      <q-input v-model="email" label="Email" type="email" />
      <q-input v-model="password" label="Password" type="password" />
      <q-btn label="Login" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { api } from "boot/axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin() {
      try {
        const { data } = await api.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", data.access_token);
        this.$router.push("/");
      } catch (error) {
        this.$q.notify({ type: "negative", message: "Login failed!" });
      }
    },
  },
};
</script>
