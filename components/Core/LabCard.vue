<template>
  <div>
    <v-card
      elevation="0"
      rounded="lg"
      style="border: 1px solid #dee5f1; border-radius: 12px !important"
    >
      <v-img height="150" cover :src="item.image"></v-img>
      <v-card-title style="font-weight: 500">{{ item.title }}</v-card-title>
      <v-card-text>
        <p class="mb-4">{{ item.description }}</p>

        <v-chip
          size="x-small"
          variant="tonal"
          class="mr-2"
          v-for="(tag, index) in item.tags"
          :key="index"
          >{{ tag }}</v-chip
        >

        <div class="my-3 mb-4 mt-8">
          <v-avatar
            size="25"
            :class="index == 0 ? '' : 'ml-n2'"
            v-for="(author, index) in item.authors"
            :key="index"
          >
            <v-img :alt="author.name" :src="author.image"></v-img>
          </v-avatar>
          <p class="ml-2 mb-0" style="font-size: 85%; display: inline">
            Last Updated: {{ getDate }}
          </p>
          <v-btn
            rounded
            @click="appLoading = true"
            :to="item._path"
            class="float-right mt-0 mb-3"
            variant="tonal"
            color="primary"
            >Start</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});

const appLoading = useAppLoading();

const getDate = computed(() => {
  return getFormatedDate(props.item.date);
});
</script>

<style>
</style>