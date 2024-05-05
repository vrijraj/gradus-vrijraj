<template>
  <v-btn :variant="type" :color="color">
    <slot />
  </v-btn>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "primary",
  },
  color: {
    type: String,
    default: "primary",
  },
});

</script>
