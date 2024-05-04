<template>
  <v-card
    style="
      background-color: #f5f5f5;
      border-left: 7px solid #bdbdbd;
      border-radius: 12px;
    "
    elevation="0"
    class="pa-3 my-3"
  >
    <p style="line-height: normal; font-size: 100%; padding: 0 !important">
      <slot />
    </p>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>