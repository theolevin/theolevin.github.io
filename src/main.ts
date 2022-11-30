import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueEasyLightbox from 'vue-easy-lightbox';

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueEasyLightbox);

app.mount("#app");
