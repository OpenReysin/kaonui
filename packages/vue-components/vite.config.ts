import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: "tsconfig.app.json",
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "KaonUIVue",
			fileName: (format) => `index.${format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["vue", "@kaonui/lit"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
					"@kaonui/lit": "KaonUILit",
				},
			},
		},
		target: "es2018",
		minify: true,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
