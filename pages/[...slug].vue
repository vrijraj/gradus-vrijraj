<template>
  <Head>
    <Title>{{ metadata.title }} | Gradus</Title>
    <Meta name="description" :content="metadata.description" />
  </Head>
  <v-app-bar :elevation="0" color="" height="60">
    <template v-slot:prepend>
      <v-btn to="/" icon size="small"
        ><v-icon>mdi-keyboard-backspace</v-icon></v-btn
      >
    </template>
    <v-app-bar-title>{{ data.title }}</v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-title class="float-right mr-3">
        <CoreShareBtn />
        <v-avatar size="30">
          <v-img src="/logo.png" width="120"></v-img>
        </v-avatar>
      </v-app-bar-title>
    </template>
  </v-app-bar>

  <!-- Left Sidebar -->
  <v-navigation-drawer
    floating
    elevation="0"
    width="300"
    v-model="stepDrawer"
    style="background-color: #f5f8fc"
  >
    <SidebarChips
      :toc="finalData.body.toc"
      :currentNode="currentNode"
      @currentNodeChanged="(i) => (currentNode = i)"
    />

    <template v-slot:append>
      <div class="px-4">
        <!-- Author -->
        <v-list >
          <span style="font-size: 90%;">Author</span>
          <v-list-item class="pa-2" style="background-color: white;border: 1px solid #e0e0e0;border-radius: 10px !important;">
            <v-list-item-title style="font-size: 95%;">{{ metadata.author }}</v-list-item-title>
            <v-list-item-subtitle style="font-size: 80%;">
              <span>Visit Website</span>
            </v-list-item-subtitle>
            <template v-slot:prepend>
              <v-avatar size="40">
                <v-img
                  src="https://pbs.twimg.com/profile_images/1584518387392139264/6ENtnzmY_400x400.jpg"
                ></v-img>
              </v-avatar>
            </template>
            <template v-slot:append>
              <v-btn icon="mdi-linkedin" size="x-small" variant="text"></v-btn>
              <v-btn icon="mdi-github" size="x-small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-sheet class="d-flex mx-0 my-3" style="background-color: #f5f8fc">
          <v-sheet class="ma-0 pa-0 me-auto align-self-center" style="background-color: #f5f8fc">
            <a href="http://" target="_blank">
              <v-img
              width="130"
              :src="'/donotremove/build-with-gradus.svg'"
            ></v-img>
            </a>
          </v-sheet>

          <v-sheet class="ma-0 pa-0 align-self-center" style="background-color: #f5f8fc">
            <a
              href="mailto:vrijraj2396@gmail.com"
              class="mx-0"
              style="font-size: 80%"
            >
              <v-icon>mdi-bug-outline</v-icon> Report a Bug</a
            >
          </v-sheet>
        </v-sheet>
      </div>
    </template>
  </v-navigation-drawer>
  <!-- Left Sidebar -->

  <v-main class="d-flex align-center justify-center mx-md-16 mx-0 mt-3" px>
    <v-fab
      @click="currentNode > 0 && currentNode--"
      variant="flat"
      icon
      app
      appear
      color="#DEE5F1"
      location="bottom start"
      class="d-none d-md-flex d-lg-flex d-lg-flex d-xxl-flex"
      ><v-icon>mdi-arrow-left</v-icon></v-fab
    >
    <v-slide-y-reverse-transition>
      <v-container
        fluid
        style="
          background-color: white;
          border-radius: 12px !important;
          border: 1px solid #dee5f1;
          min-height: 88vh;
          max-width: 900px;
        "
        class="mx-3 mt-0 pa-0 mb-0"
        v-show="show"
      >
        <div
          class="pa-md-8 pa-4"
          style="
            background-color: #e8f0fe;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          "
          v-if="currentNode == 0"
        >
          <v-btn
            class="float-right d-none d-md-flex d-lg-flex d-lg-flex d-xxl-flex"
            variant="flat"
            @click="aiDrawer = !aiDrawer"
            rounded
            size="small"
          >
            <v-avatar size="x-small">
              <v-img src="/public/donotremove/ai-logo.svg"></v-img>
            </v-avatar>
            AI Chat
          </v-btn>

          <p style="font-size: 150%">
            <b>{{ data.title }}</b>
          </p>
          <p style="font-size: 95%">{{ data.description }}</p>
          <p class="mt-4 mb-0" style="font-size: 95%">
            <b>Last Updated:</b> {{ formatDate(metadata.date) }}
          </p>
          <p class="mt-1" style="font-size: 95%">
            <b>Written By:</b> {{ metadata.author }}
          </p>
          <v-chip
            size="small"
            variant="outlined"
            class="mr-2 mt-3"
            v-for="(tag, index) in metadata.tags"
            :key="index"
            >{{ tag }}</v-chip
          >
          <!-- <v-list class="px-0" style="width: 200px; background-color: #e8f0fe">
          <v-list-item>
            <v-list-item-title>{{ metadata.author }}</v-list-item-title>
            <template v-slot:prepend>
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </template>
            <template v-slot:append>
              <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list> -->
        </div>
        <!-- Header -->
        <div
          class="px-md-8 py-md-3 pa-4"
          style="
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            border-bottom: 1px solid #e0e0e0;
          "
          v-if="currentNode != 0"
        >
          <p style="font-weight: 400">
            <span class="mr-1">{{ currentNode + 1 }}.</span>
            {{ finalData.body.toc[currentNode].title }} (<span
              ><v-icon size="lg" class="mt-n1 mr-1">mdi-clock-fast</v-icon
              >{{ readTime }} min remaining</span
            >)
          </p>

          <v-btn
            class="float-right d-none d-md-flex d-lg-flex d-lg-flex d-xxl-flex mt-n6"
            variant="flat"
            @click="aiDrawer = !aiDrawer"
            rounded
            size="small"
          >
            <v-avatar size="x-small">
              <v-img src="/public/donotremove/ai-logo.svg"></v-img>
            </v-avatar>
            AI Chat
          </v-btn>
        </div>
        <!-- Header -->
        <div class="pa-md-8 pa-4">
          <div class="" v-for="(node, i) in finalData" :key="`node-${i}`">
            <ContentRenderer :value="node">
              <ContentRendererMarkdown :value="node" />
            </ContentRenderer>
          </div>
        </div>
      </v-container>
    </v-slide-y-reverse-transition>

    <v-fab
      @click="currentNode < groupedContent.length - 1 && currentNode++"
      variant="flat"
      icon
      app
      appear
      color="#DEE5F1"
      location="bottom right"
      :style="aiDrawer ? 'left: 0 !important' : ''"
      class="d-none d-md-flex d-lg-flex d-lg-flex d-xxl-flex"
      ><v-icon>mdi-arrow-right</v-icon></v-fab
    >
  </v-main>

  <v-navigation-drawer
    floating
    app
    :width="aiDrawerWidth"
    location="right"
    elevation="0"
    v-model="aiDrawer"
    class="pa-3"
    style="background-color: #f5f8fc"
  >
    <AIChat :content="finalData.body"></AIChat>
    
  </v-navigation-drawer>
  <CoreBottomNav
    :contentLength="groupedContent.length"
    class="d-flex d-md-none d-lg-none d-lg-none d-xxl-none"
  />

  <v-fab
    class="d-flex d-md-none d-lg-none d-lg-none d-xxl-none"
    @click="stepDrawer = !stepDrawer"
    icon="mdi-format-list-checks"
    location="bottom end"
    size="50"
    color="#E8F0FE"
    app
    appear
  ></v-fab>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const aiDrawer = useAIChat();
const aiDrawerWidth = ref(400);
const stepDrawer = ref(false);
const show = ref(false);

// Asynchronous data fetching
const { data } = await useAsyncData(`${route.path}`, () =>
  queryContent(route.path).findOne()
);

onMounted(() => {
  if (window.screen.width > 500) {
    aiDrawer.value = true;
    stepDrawer.value = true;
    aiDrawerWidth.value = 300;
    show.value = true;
  }
});

const currentNode = ref(getCurrentNodeFromUrl());
const totalNodes = ref(0);

function getCurrentNodeFromUrl() {
  const url = new URLSearchParams(route.query);
  const node = url.get("page");
  return node ? parseInt(node) : 0;
}

const groupedContent = computed(() => {
  show.value = false;
  const sections = [];
  let currentSection = [];

  // data.value.body.children.find()

  let styleEl = data.value.body.children.find((node) => node.tag === "style");

  data.value?.body?.children.forEach((node) => {
    if (node.tag === "h1" && currentSection.length) {
      sections.push(currentSection);
      currentSection = [];
    }
    if (styleEl != undefined) {
      currentSection.push(styleEl);
    }

    currentSection.push(node);
  });

  if (currentSection.length) sections.push(currentSection);
  // drawer.value = true;
  show.value = false;
  return sections;
});

//States
// const currentNode = useCurrentNode();

watch(
  currentNode,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      router.replace({ path: route.fullPath, query: { page: newVal } });
    }
  },
  { immediate: true }
);

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
  totalNodes.value = menu.length;
  return menu;
};

function formatDate(dateString) {
  const options = { month: "long", day: "numeric", year: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

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
  date: data.value?.date,
  duration: data.value?.duration,
  title: data.value?.title,
  description: data.value?.description,
  categories: data.value?.categories,
  slug: data.value?.slug,
  image: data.value?.image,
}));

useHead({
  meta: [
    { property: "og:title", content: metadata.value.title + " - Gradus" },
    {
      property: "og:description",
      content: metadata.value.description,
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://gradus-app.vercel.app/" + metadata.value._path,
    },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: metadata.value.image },
    {
      hid: "t-type",
      name: "twitter:card",
      content: metadata.value.description,
    },
  ],
});

// Read time per section
const readTime = computed(() => {
  return getReadTIme(groupedContent.value[currentNode.value]);
});

const finalData = computed(() => ({
  body: {
    type: "root",
    children: groupedContent.value[currentNode.value],
    toc: getToc(),
  },
}));
</script>
