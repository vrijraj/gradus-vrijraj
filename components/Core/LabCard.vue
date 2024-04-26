<template>
  <v-card elevation="0">
    <v-img :src="item.image"></v-img>
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>
      <p class="mb-2">{{ item.description }}</p>
      <v-chip
        size="small"
        variant="outlined"
        class="mr-2"
        v-for="(tag, index) in item.tags"
        :key="index"
        >{{ tag }}</v-chip
      >
      <br />
      <br />
      <NuxtLink :to="item._path"
        ><v-btn rounded variant="tonal">View</v-btn></NuxtLink
      >
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style>
</style>