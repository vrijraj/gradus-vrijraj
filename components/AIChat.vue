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
        <v-btn class="float-right mt-n1" icon size="x-small" variant="flat" @click="aiDrawer=false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <p class="mb-3">AI Chat Panel <v-chip size="x-small" color="error">Experimental</v-chip></p>

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
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const props = defineProps({
  content: Object,
});

let loader = ref(false);
let finalResult = ref([]);
const aiDrawer = useAIChat();

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyCKmk8zCAY_pcjqI_haNsm3yPqiJqvu21I";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });
const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 30720,
};

console.log('props.content', props.content);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
// // Provide me a summary from the below MD file content in the paragraph format only
const parts = [
  {
    text: `
      You are a Markdown Content Expert.
      Your task is extract content from the markdown file and answers according to user queries.
      
      Give me a exact content from this markdown code without explaining anything, make sure to provide it in the paragraph format only

      ${JSON.stringify(props.content)}

      Please deliver the response in propert formated text.
    `,
  },
];

const getData = async () => {
  loader.value = true;
  finalResult.value = [];
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    loader.value = false;
    finalResult.value = (result.response.text());

  } catch (error) {
    console.log(error);
    loader.value = false;
  }
};
</script>

<style>
</style>