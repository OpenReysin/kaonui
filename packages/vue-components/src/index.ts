import type { App } from "vue";

// Import components
import { KaonButton } from "./components/KaonButton.js";
import { KaonCard } from "./components/KaonCard.js";

// Import types
export type { KaonButtonProps } from "./components/KaonButton.js";
export type { KaonCardProps } from "./components/KaonCard.js";

// Export components
export { KaonButton, KaonCard };

// Plugin interface
export interface KaonUIVueOptions {
	prefix?: string;
}

// Vue plugin
export const KaonUIVue = {
	install(app: App, options: KaonUIVueOptions = {}) {
		const { prefix = "Kaon" } = options;

		app.component(`${prefix}Button`, KaonButton);
		app.component(`${prefix}Card`, KaonCard);
	},
};

// Default export for Vue.use()
export default KaonUIVue;

// Version info
export const version = "__VERSION__";
