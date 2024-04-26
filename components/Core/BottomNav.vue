<template>
  <v-bottom-navigation color="primary" horizontal grow>
    <v-btn icon @click="currentNode > 0 && currentNode--">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn @click="aiDrawer=!aiDrawer">AI Chat</v-btn>
    <v-btn icon @click="currentNode < contentLength - 1 && currentNode++">
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
const props = defineProps({
  contentLength: Number,
});
const currentNode = useCurrentNode();
const aiDrawer = useAIChat();
// export default {
//   data: () => ({ value: 1 }),
// };
</script>

<style>
</style>