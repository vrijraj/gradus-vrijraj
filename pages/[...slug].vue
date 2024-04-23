<template>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-btn to="/" icon><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
    </template>
    <v-app-bar-title>Application Bar</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer floating elevation="0">
    {{ finalData.body.toc }}
    <div class="d-flex px-2 my-2">
      <v-btn
        class="flex-grow-1"
        color="grey"
        height="40"
        variant="flat"
      ></v-btn>

      <v-avatar
        class="ms-2"
        color="surface-variant"
        variant="flat"
        rounded
      ></v-avatar>
    </div>
  </v-navigation-drawer>
  <v-main
    class="d-flex align-center justify-center mx-10 mt-3"
    style="min-height: 300px"
  >
    <v-btn @click="currentNode--" variant="flat" icon
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <v-container
      style="background-color: white; border-radius: 12px"
      class="mx-2 mt-0"
    >

      <div
        class="pa-4"
        style="background-color: #e8f0fe"
        v-if="currentNode == 0"
      >
      <v-btn @click="aiDrawer = !aiDrawer">AI Chat</v-btn>
        <h2>
          <b>{{ data.title }}</b>
        </h2>
        <p>{{ data.description }}</p>
      </div>
      <div v-for="(node, i) in finalData" :key="`node-${i}`">
        <ContentRenderer :value="node">
          <ContentRendererMarkdown :value="node" />
        </ContentRenderer>
      </div>
    </v-container>
    <v-btn @click="currentNode++" variant="flat" icon
      ><v-icon>mdi-arrow-right</v-icon></v-btn
    >
    <!-- {{ finalData }} -->
  </v-main>
  <v-navigation-drawer floating location="right" elevation="0" v-model="aiDrawer">
    <div class="d-flex px-2 my-2">
      <v-btn
        class="flex-grow-1"
        color="grey"
        height="40"
        variant="flat"
      ></v-btn>

      <v-avatar
        class="ms-2"
        color="surface-variant"
        variant="flat"
        rounded
      ></v-avatar>
    </div>
  </v-navigation-drawer>

  <!-- --{{ finalData }} -->
  <!--  -->
</template>

<script setup>
const route = useRoute();
const aiDrawer = ref(false)
// Asynchronous data fetching
const { data, error, refresh, status, pending, execute } = await useAsyncData(
  `${route.path}`,
  () => queryContent(route.path).findOne()
);

console.log("data", data);

//States
// const isExpanded = useIsExpanded();
const currentNode = ref(0);

const getToc = () => {
  let menu = [];
  data.value?.body?.children.forEach((node) => {
    if (node.tag == "h1") {
      menu.push({
        title: node?.children[0].value,
        link: node?.props.id,
      });
    }
  });
  return menu;
};

const groupedContent = computed(() => {
  const sections = [];
  let currentSection = [];

  let styleEl = data.value.body.children.find((node) => node.tag === "style");

  data.value?.body?.children.forEach((node) => {
    if (node.tag === "h1" && currentSection.length) {
      sections.push(currentSection);
      currentSection = [];
    }
    currentSection.push(styleEl);
    currentSection.push(node);
  });

  if (currentSection.length) sections.push(currentSection);
  // drawer.value = true;
  return sections;
});

// For seo
const metadata = computed(() => ({
  _type: data.value?._type,
  _id: data.value?._id,
  _source: data.value?._source,
  _file: data.value?._file,
  _extension: data.value?._extension,
  _path: data.value?._path,
  _dir: data.value?._dir,
  _draft: data.value?._draft,
  _partial: true,
  _locale: data.value?._locale,
  author: data.value?.author,
  duration: data.value?.duration,
  title: data.value?.title,
  description: data.value?.description,
  categories: data.value?.categories,
  slug: data.value?.slug,
}));

const finalData = computed(() => ({
  body: {
    type: "root",
    children: groupedContent.value[currentNode.value],
    toc: getToc(),
  },
}));
</script>
