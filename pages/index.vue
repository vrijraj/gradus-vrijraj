<template>
  <v-main>
    <v-app-bar :elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar>
            <v-text-field
              v-model="search.value"
              hide-details="auto"
              variant="outlined"
              dense
              label="Search"
            ></v-text-field>
            <div v-if="Object.keys(res).length > 0">
              <NuxtLink v-for="r in res.value" :to="r.id">{{
                r.title
              }}</NuxtLink>
            </div>
            <v-spacer></v-spacer>
            <v-select
              label="Select"
              variant="outlined"
              multiple
              dense
              :items="[
               "firebase",
               "node.js"
              ]"
            ></v-select>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row>
        <ContentList path="/" v-slot="{ list }" :query="{ draft: false }">
          <v-col md="4" v-for="article in list" :key="article._path">
            <v-card>
              <v-img :src="article.image"></v-img>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-text>
                <p>{{ article.description }}</p>
                <v-chip v-for="(tag, index) in article.tags" :key="index">{{
                  tag
                }}</v-chip>
                <br />
                <br />
                <NuxtLink :to="article._path"
                  ><v-btn variant="tonal">asd</v-btn></NuxtLink
                >
              </v-card-text>
              <!-- {{ article }} -->

              <!-- <v-btn :to="article._path"></v-btn> -->
            </v-card>
          </v-col>
        </ContentList>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import debounce from "lodash.debounce";

//Filter by tags
const data = await queryContent("").where({ tags: ["firebase", "node.js"]}).find();

const search = reactive({
  value: "",
});
const res = ref([]);
watch(
  search,
  debounce(async () => {
    if (search.value.length < 3) {
      res.value = [];
      return;
    }
    res.value = await searchContent(search.value);
    console.log(res.value);
  }, 500)
);
</script>

<style></style>
