<template>
  <v-container
    style="
      background-color: white;
      max-width: 300px;
      border-radius: 12px;
      border: 1px solid #dee5f1;
    "
    class=""
  >
    <v-row>
      <v-col class="">
        <v-btn
          class="float-right mt-n1"
          icon
          size="x-small"
          variant="flat"
          @click="aiDrawer = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <p class="mb-3">
          AI Chat Panel
          <v-chip size="x-small" color="error">Experimental</v-chip>
        </p>

        <div
          class="pa-3 text-left"
          style="
            min-height: 300px;
            max-height: 400px;
            background-color: #e7f0fe;
            border-radius: 12px;
            font-size: 87%;
            overflow-y: scroll;
          "
        >
          <div v-html="finalResult"></div>
        </div>
        <v-btn
          @click="getData"
          rounded
          :loading="loader"
          variant="tonal"
          color="primary"
          class="mt-3"
          >Summerize Me</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { config } from "../assets/config.js";
const props = defineProps({
  content: Object,
});

let loader = ref(false);
let finalResult = ref([]);
const aiDrawer = useAIChat();



async function getData() {
  loader.value = true;

  try {
    if (config.config.aiFlag === true) {
      const resp = await $fetch(`api/${config.config.aiFlagType}`, {
        method: "POST",
        body: JSON.stringify({
          prompt: props.content,
        }),
      });
      finalResult.value = resp.response.content;
      loader.value = false;
    } else {
      finalResult.value = "AI is disabled";
      loader.value = false;
    }
  } catch (e) {
    console.log(e);
  }
}
</script>

<style></style>
