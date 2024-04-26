<template>
  <NuxtLink :to="item._path">
    <v-card elevation="0">
      <v-img :src="item.image"></v-img>
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        <p class="mb-10">{{ item.description }}</p>
        <v-chip
          size="small"
          variant="outlined"
          class="mr-2"
          v-for="(tag, index) in item.tags"
          :key="index"
          >{{ tag }}</v-chip
        >
        <!-- <NuxtLink :to="item._path"
        ><v-btn rounded variant="tonal">View</v-btn></NuxtLink
      > -->
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style>
</style>