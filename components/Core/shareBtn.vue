<template>
  <div>
    <v-btn
      class="d-flex"
      location="bottom end"
      size="50"
      color="#E8F0FE"
	  z-index="1000"
      app
      appear
      icon
      @click="dialog = true"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Share</v-card-title>
        <v-card-text>
          <div class="d-flex align-center justify-space-between mb-4">
            <v-text-field v-model="url" label="Link" readonly outlined dense />
            <v-btn icon @click="copyLink">
              <v-icon @click="copyLink">mdi-content-copy</v-icon>
            </v-btn>
          </div>
          <v-alert v-if="alert.show" :type="alert.type" dense dismissible>{{
            alert.message
          }}</v-alert>
          <div class="d-flex justify-space-around">
            <v-btn icon @click="shareOnWhatsApp">
              <v-icon large color="green">mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon @click="shareOnTwitter">
              <v-icon large color="blue">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon @click="shareOnLinkedIn">
              <v-icon large color="blue darken-2">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog.value = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
