/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VRow, VCol, VImg, VCard, VApp,VMain,VContainer } from 'vuetify/components'

const myCustomTheme = {
  dark: false,
  colors: {
    primary: "#1b68b3",
    secondary: "#f7f7f7",
    accent: "#82B1FF",
    error: "#b00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VRow,
    VCol,
    VImg,
    VCard,
    VApp,
    VMain,
    VContainer,
    
  },
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme,
    },
  },
});
