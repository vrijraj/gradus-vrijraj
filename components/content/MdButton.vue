<template>
  <v-btn :variant="type" :color="color" :href="link" target="_blank" >
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
  link:{
    type: String,
    default:''
  }
});

</script>
