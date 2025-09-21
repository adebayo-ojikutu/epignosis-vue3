/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import { createI18n } from "vue-i18n";

// Styles
import "unfonts.css";

const app = createApp(App);
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      form: {
        name: "Name",
        email: "Email Address",
        phone: "Phone",
        address: "Address",
        company: "Company",
        save: "Save",
        cancel: "Cancel",
      },
    },
  },
});
registerPlugins(app);
app.use(i18n);
app.mount("#app");
