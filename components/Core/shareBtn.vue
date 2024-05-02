<template>
  <v-btn
    color="#252726"
    @click="dialog = true"
    class="mx-3"
    size="small"
    variant="text"
    rounded
    prepend-icon="mdi-share-variant-outline"
    >Share
  </v-btn>

  <v-dialog v-model="dialog" rounded max-width="400">
    <v-card style="border-radius: 12px !important">
      <v-card-title class="text-h5"
        >Share

        <v-btn
          class="float-right"
          icon
          size="small"
          variant="flat"
          @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-space-around mb-4">
          <v-btn @click="shareOnWhatsApp" variant="tonal" size="small" rounded>
            <template v-slot:prepend>
              <v-icon large color="green">mdi-whatsapp</v-icon>
            </template>
            WhatsApp
          </v-btn>
          <v-btn @click="shareOnTwitter" variant="tonal" size="small" rounded>
            <template v-slot:prepend>
              <v-icon large color="blue">mdi-twitter</v-icon>
            </template>
            Twitter/X
          </v-btn>
          <v-btn @click="shareOnLinkedIn" variant="tonal" size="small" rounded>
            <template v-slot:prepend>
              <v-icon large color="blue">mdi-linkedin</v-icon>
            </template>
            LinkedIn
          </v-btn>
        </div>

        <span style="font-size: 90%" class="mb-4">Share Link</span>
        <div class="d-flex align-center justify-space-between mb-4 mt-1">
          <v-text-field
            variant="outlined"
            v-model="url"
            rounded
            readonly
            outlined
            density="compact"
          />
          <v-btn
            icon
            @click="copyLink"
            class="mt-n5 ml-3"
            size="small"
            variant="tonal"
          >
            <v-icon @click="copyLink">mdi-content-copy</v-icon>
          </v-btn>
        </div>
        <!--  -->
        <v-alert
          v-if="alert.show"
          class="pa-2 mb-4"
          :type="alert.type"
          dense
          dismissible
        >
          {{ alert.message }}</v-alert
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
const dialog = ref(false);

const url = ref(window?.location.href);
const alert = ref({
  show: false,
  type: "",
  message: "",
});

const copyLink = () => {
  navigator.clipboard
    .writeText(url.value)
    .then(() => {
      alert.value = {
        show: true,
        type: "success",
        message: "Link copied to clipboard!",
      };
      setTimeout(() => (alert.value.show = false), 1000);
    })
    .catch((err) => {
      alert.value = { show: true, type: "error", message: "Failed to copy!" };
      setTimeout(() => (alert.value.show = false), 1000);
    });
};

const linkedinContent = `
🎉 Exciting News! 🎉 %0A
I've just published a new codelab. 😃 %23Gradus %0A

If you want to learn through practice, join me in this interactive session! %0A%0A

Check it out here ➡️ ${url.value}
`;

const whatsappContent = `
🎉 Exciting News! 🎉
I've just published a new codelab. 😃 #Gradus

If you want to learn through practice, join me in this interactive session!

Check it out here ➡️ ${url.value}
`;

const shareOnWhatsApp = () => {
  const url = window.location.href;
  window.open(`https://wa.me/?text=${whatsappContent}`, "_blank");
};

const shareOnTwitter = () => {
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
};

const shareOnLinkedIn = () => {
  const url = window.location.href;
  window.open(
    `https://www.linkedin.com/feed/?shareActive=true&text=${linkedinContent}`,
    "_blank"
  );
};
</script>
