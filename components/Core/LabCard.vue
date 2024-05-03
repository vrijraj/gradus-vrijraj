<template>
  <NuxtLink :to="item._path">
    <v-card elevation="0" rounded="lg" style="border: 1px solid #dee5f1">
      <v-img height="150" cover :src="item.image"></v-img>
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        <p class="mb-2">{{ item.description }}</p>
        <p class="my-5" style="font-size: 85%">Updated: {{ getDate }}</p>

        <v-chip
          size="x-small"
          variant="tonal"
          class="mr-2"
          v-for="(tag, index) in item.tags"
          :key="index"
          >{{ tag }}</v-chip
        >
        <NuxtLink :to="item._path" class="float-right mt-0 mb-3"
          ><v-btn rounded variant="tonal">Start</v-btn></NuxtLink
        >
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  item: Object,
});

const getDate = computed(() => {
  return getFormatedDate(props.item.date);
});
</script>

<style>
</style>