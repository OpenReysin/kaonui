import { createApp } from 'vue';
import KaonUI from '@kaonui/vue-components';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(KaonUI);
app.mount('#app');