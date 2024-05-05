<template>
  <ClientOnly>
    <v-container v-for="(n, i) in toc" :key="i" cols="12" class="mb-0 mt-2">
      <v-row
        class="py-4 px-2 mx-1 mb-n5"
        style="cursor: pointer; min-height: 40px; border-radius: 10px"
        :style="`
        border: ${i == currentNode ? '1px solid #dee5f1' : '1px solid #DEE5F1'};
        background-color: ${i == currentNode ? '#DEE5F1' : '#EEF2F9'};
      `"
        justify="center"
        align="center"
        @click="setCurrentNode(i)"
      >
        <v-row justify="start" align="start">
          <v-col md="1" cols="1">
            <div
              :color="
                i == currentNode
                  ? '#165FDC'
                  : i <= currentNode
                  ? 'green'
                  : 'white'
              "
              class="mr-2 rounded-xl"
              small
              :style="`width: 8px; height: 24px; background-color: ${
                i == currentNode
                  ? '#165FDC'
                  : i <= currentNode
                  ? 'green'
                  : 'white'
              };`"
            ></div>
          </v-col>
          <v-col md="1" cols="1">
            <p class="mb-0" style="font-size: 100%; font-weight: 500">
              {{
                (i + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
              }}
            </p>
          </v-col>
          <v-col md="8" cols="8">
            <p class="mb-0" style="font-size: 90%">{{ n.title }}</p>
          </v-col>
          <v-col md="1" cols="1">
            <v-avatar
              :color="i == currentNode ? '#165FDC' : ''"
              class="mr-4"
              small
              style="width: 8px; height: 8px"
            ></v-avatar>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </ClientOnly>
</template>
<script>
export default {
  props: {
    toc: Array,
    currentNode: Number,
  },
  emits: ["currentNodeChanged"],
  methods: {
    setCurrentNode(i) {
      this.$emit("currentNodeChanged", i);
    },
  },
};
</script>
<style>
/* Styles for the component */
</style>
