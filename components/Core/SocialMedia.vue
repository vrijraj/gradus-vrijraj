<template>
  <v-btn
    v-if="social.linkedin.length"
    :href="social.linkedin"
    target="_blank"
    variant="flat"
    size="small"
    class="mr-2 mb-2"
    icon
    ><v-icon size="large">mdi-linkedin</v-icon></v-btn
  >
  <v-btn
    v-if="social.twitter.length"
    :href="social.twitter"
    target="_blank"
    variant="flat"
    size="small"
    class="mr-2 mb-2"
    icon
    ><v-icon size="large">mdi-twitter</v-icon></v-btn
  >
  <v-btn
    v-if="social.github.length"
    :href="social.github"
    target="_blank"
    variant="flat"
    size="small"
    class="mr-2 mb-2"
    icon
    ><v-icon size="large">mdi-github</v-icon></v-btn
  >
  <v-btn
    v-if="social.web.length"
    :href="social.web"
    target="_blank"
    variant="flat"
    size="small"
    class="mr-2 mb-2"
    icon
    ><v-icon size="large">mdi-web</v-icon></v-btn
  >
  <v-btn
    v-if="social.youtube.length"
    :href="social.youtube"
    target="_blank"
    variant="flat"
    size="small"
    class="mr-2 mb-2"
    icon
    ><v-icon size="large">mdi-youtube</v-icon></v-btn
  >
</template>

<script setup>
const props = defineProps({
  social: Object,
});
</script>

<style>
</style>