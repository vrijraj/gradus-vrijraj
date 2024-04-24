<template>
  <v-row>
    <v-col v-for="(n, i) in toc" :key="i" cols="12">
      <v-sheet
        @click="currentNode = i"
        class="d-flex align-center justify-center py-1 my-2"
        rounded="xl"
        :color="i == currentNode ? '#DEE5F1' : '#EEF2F9'"
        :elevation="i == currentNode ? 2 : 0"
        style="cursor: pointer; border: 2px solid #dee5f1"
      >
        <v-container class="px-4 d-flex align-center ga-3 justify-start">
          <span
            :color="
              i == currentNode ? 'blue' : i <= currentNode ? 'green' : 'white'
            "
            class="mr-2 rounded-xl"
            small
            :style="`width: 8px; height: 24px; background-color: ${
              i == currentNode ? 'blue' : i <= currentNode ? 'green' : 'white'
            };`"
          ></span>
          <div class="d-flex align-center" style="width: 100%;">
            <v-row class="d-flex justify-start ga-3">
              <p>{{
                (i + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
              }}</p>
              <p>{{ (n.title)}}</p>
            </v-row>
          </div>
        </v-container>
        <v-avatar
          :color="i == currentNode ? 'blue' : 'white'"
          class="mr-4"
          small
          style="width: 8px; height: 8px"
        ></v-avatar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script setup>
defineProps(["toc"]);
const currentNode = useCurrentNode();
</script>
