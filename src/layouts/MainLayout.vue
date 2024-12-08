<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-primary"
        />

        <q-toolbar-title class="text-primary text-weight-bold text-center">
          Angkringan
        </q-toolbar-title>

        <div>Nustra Group</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list style="margin-top: 20%">
        <EssentialLink
          style="font-size: 14px"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
        <div class="row">
          <q-btn
            style="margin-top: 200%; font-size: 14px; width: 100%"
            label="Logout"
            icon="logout"
            color="negative"
            size="sm"
            @click="logout"
            :loading="isLoading"
            :disable="isLoding"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { api } from "boot/axios";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    icon: "school",
    link: "https://quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<script>
export default {
  data() {
    return {
      isLoading: false,
      message: "",
    };
  },
  methods: {
    async logout() {
      try {
        this.isLoading = true;
        const { data } = await api.post("logout", {});
        if ((data.message = "Logged out successfully")) {
          localStorage.removeItem("token");
          this.isLoading = false;
          this.$router.push("/login");
        }
      } catch {
        this.$q.notify({ type: "negative", message: "Logout failed!" });
      }
    },
  },
};
</script>
