<template>
  <v-app-bar :elevation="0">
    <v-app-bar-title>
      <NuxtLink to="/">
        <NuxtImg src="/donotremove/logo.svg" width="120" />
      </NuxtLink>
    </v-app-bar-title>
    <ClientOnly>
      <v-progress-linear
        :active="appLoading"
        :indeterminate="true"
        color="primary"
        absolute
        bottom
      ></v-progress-linear>
    </ClientOnly>
  </v-app-bar>
</template>

<script setup>
const appLoading = useAppLoading();
</script>
