<template>
  <v-container v-for="(n, i) in toc" :key="i" cols="12" class="mb-0 mt-2">
    <v-row
      class="pa-4 mx-1"
      style="
        background-color: #dee5f1;
        cursor: pointer;
        min-height: 40px;
        border-radius: 10px;
      "
      @click="currentNode = i"
    >
      <v-row justify="start" align="start">
        <v-col md="1">
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
        <v-col md="1">
          <p class="mb-0" style="font-size: 100%; font-weight: 500">
            {{
              (i + 1).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })
            }}
          </p>
        </v-col>
        <v-col md="8">
          <p class="mb-0" style="font-size: 90%">{{ n.title }}</p>
        </v-col>
        <v-col md="1">
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
</template>
<script setup>
defineProps(["toc"]);
const currentNode = useCurrentNode();
</script>
