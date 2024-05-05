<template>
  <v-app-bar :elevation="0" color="" height="60">
    <template v-slot:prepend>
      <v-btn to="/" icon size="small" @click="appLoading = true">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      <ClientOnly>
        <v-progress-linear
          :active="appLoading"
          :indeterminate="true"
          color="primary"
          absolute
          bottom
        ></v-progress-linear>
      </ClientOnly>
    </template>
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-title class="float-right mr-3">
        <CoreShareBtn />
        <v-avatar size="30">
          <v-img src="/logo.png" width="120" ></v-img>
        </v-avatar>
      </v-app-bar-title>
    </template>
  </v-app-bar>
</template>

<script setup>
defineProps({
  title: String,
});
const appLoading = useAppLoading();
</script>
