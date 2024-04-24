<template>
    <v-bottom-navigation v-model="value" color="primary" horizontal grow>
      <v-btn icon >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn>AI Chat</v-btn>
      <v-btn icon>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>

<style>
</style>