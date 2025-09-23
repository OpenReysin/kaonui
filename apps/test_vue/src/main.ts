import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import KaonUIVue from '@kaonui/vue';

const app = createApp(App);
app.use(KaonUIVue);
app.mount("#app");
