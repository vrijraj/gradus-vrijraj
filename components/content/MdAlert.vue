<template>
  <v-alert :color="color" variant="tonal" style="border-radius: 12px">
    <template v-slot:title
      ><p class="my-0"><slot name="title" /></p>
    </template>
    <p style="line-height: 0 !important" class="my-0">
      <slot name="content" />
    </p>
  </v-alert>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
const color =
  props.type === "success"
    ? "success"
    : props.type === "error"
    ? "error"
    : props.type === "warning"
    ? "warning"
    : props.type === "info"
    ? "info"
    : "primary";
</script>
