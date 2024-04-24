<template>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-btn to="/" icon><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
    </template>
    <v-app-bar-title>{{ data.title }}</v-app-bar-title>
  </v-app-bar>

  <!-- Left Sidebar -->
  <v-navigation-drawer floating elevation="0">
    <!-- <div
      v-for="(item, index) in finalData.body.toc"
      :key="index"
      class="d-flex justify-space-between mb-6 bg-surface-variant"
      @click="currentNode++"
      style="cursor: pointer"
    >
      <div>Right Rectange</div>
      <div>{{ item.title }}</div>
      <div>Dot</div>
    </div> -->
    <SidebarChips :toc="finalData.body.toc" />

    <template v-slot:append>
      <div class="pa-2">
        <a href=""> <v-icon>mdi-bug-outline</v-icon> Report a Bug</a>

        <!-- Author -->
        <v-list>
          <v-list-item>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>john@google.com</v-list-item-subtitle>
            <template v-slot:prepend>
              <v-avatar size="30">
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </template>
            <template v-slot:append>
              <!-- <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn> -->
            </template>
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
  <!-- Left Sidebar -->

  <v-main
    class="d-flex align-center justify-center mx-15 mt-3"
    style="min-height: 300px"
  >
    <v-btn @click="currentNode > 0 && currentNode--" variant="flat" icon
      ><v-icon>mdi-arrow-left</v-icon></v-btn
    >
    <v-container
      style="background-color: white; border-radius: 12px !important"
      class="mx-5 mt-0 pa-0"
    >
      <div
        class="pa-8"
        style="background-color: #e8f0fe"
        v-if="currentNode == 0"
      >
        <v-btn class="float-right" variant="tonal" @click="aiDrawer = !aiDrawer"
          >AI Chat</v-btn
        >

        <p style="font-size: 150%">
          <b>{{ data.title }}</b>
        </p>
        <p style="font-size: 90%">{{ data.description }}</p>
        <v-list class="px-0" style="width: 300px; background-color: #e8f0fe">
          <v-list-item>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>john@google.com</v-list-item-subtitle>
            <template v-slot:prepend>
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </template>
            <template v-slot:append>
              <!-- <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn> -->
            </template>
          </v-list-item>
        </v-list>
      </div>
      <div class="pa-8">
        <div class="" v-for="(node, i) in finalData" :key="`node-${i}`">
          <ContentRenderer :value="node">
            <ContentRendererMarkdown :value="node" />
          </ContentRenderer>
        </div>
      </div>
    </v-container>
    <v-btn @click="currentNode < groupedContent.length - 1 && currentNode++" variant="flat" icon
      ><v-icon>mdi-arrow-right</v-icon></v-btn
    >
    <!-- {{ finalData }} -->
  </v-main>

  <v-navigation-drawer
    app
    floating
    width="300"
    location="right"
    elevation="0"
    v-model="aiDrawer"
  >
    <AIChat :content="finalData.body"></AIChat>
    <!-- <ai-chat/> -->
  </v-navigation-drawer>

  <!-- --{{ finalData }} -->
  <!--  -->
</template>

<script setup>
const route = useRoute();
const aiDrawer = ref(true);
// Asynchronous data fetching
const { data, error, refresh, status, pending, execute } = await useAsyncData(
  `${route.path}`,
  () => queryContent(route.path).findOne()
);

console.log("data", data);

//States
// const isExpanded = useIsExpanded();
const currentNode = useCurrentNode();

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
