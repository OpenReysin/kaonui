import type { App } from 'vue';
import { KaonButton } from './components/KaonButton.js';
import { KaonCard } from './components/KaonCard.js';

export { KaonButton, KaonCard };
export type { KaonButtonProps } from './components/KaonButton.js';
export type { KaonCardProps } from './components/KaonCard.js';

export default {
  install(app: App) {
    app.component('KaonButton', KaonButton);
    app.component('KaonCard', KaonCard);
  },
};