<template>
  <v-list>
    <span style="font-size: 90%">{{
      authors.length > 1 ? "Authors" : "Author"
    }}</span>
    <v-list-item
      v-for="(author, index) in authors"
      :key="index"
      class="pa-2 mb-1"
      style="
        background-color: white;
        border: 1px solid #e0e0e0;
        border-radius: 10px !important;
      "
    >
      <v-list-item-title style="font-size: 95%">{{
        author.name
      }}</v-list-item-title>
      <v-list-item-subtitle style="font-size: 80%">
        <!-- <span>Visit Website</span> -->
        <NuxtLink target="_blank" :to="author.socials.web"
          >visit website</NuxtLink
        >
      </v-list-item-subtitle>
      <template v-slot:prepend>
        <v-avatar size="40">
          <v-img :src="authorImage(author)"></v-img>
        </v-avatar>
      </template>
      <template v-slot:append>
        <v-btn
          icon="mdi-linkedin"
          size="x-small"
          target="_blank"
          :href="author.socials.linkedin"
          variant="text"
        ></v-btn>
        <v-btn
          icon="mdi-github"
          size="x-small"
          target="_blank"
          :href="author.socials.github"
          variant="text"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup>
defineProps({
  authors: Array,
});

function authorImage(author) {
  if (author.image) {
    return author.image;
  } else {
    return "/authors/default-avatar-author.jpg";
  }
}
</script>
