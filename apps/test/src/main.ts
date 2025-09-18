import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(KaonUI);
app.mount('#app');