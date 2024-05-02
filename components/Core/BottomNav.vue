<template>
  <v-bottom-navigation color="primary" horizontal grow>
    <v-btn
      icon
      @click="
        $emit('currentNodeChanged', () => {
          if (currentNode > 0) {
            return currentNode - 1;
          }
          return 0;
        })
      "
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn @click="aiDrawer = !aiDrawer">AI Chat</v-btn>
    <v-btn icon @click="$emit('currentNodeChanged', () => {
      if (currentNode < contentLength - 1) {
        return currentNode + 1;
      }
      return contentLength - 1;

    })">
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
const props = defineProps({
  contentLength: Number,
  currentNode: Number,
});
const aiDrawer = useAIChat();
// export default {
//   data: () => ({ value: 1 }),
// };
</script>

<style></style>
