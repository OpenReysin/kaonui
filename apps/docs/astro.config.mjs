// @ts-check

import starlight from "@astrojs/starlight";
import {defineConfig} from "astro/config";
import lit from '@astrojs/lit';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "KaonUI",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
                },
            ],
            sidebar: [
                {
                    slug: "introduction",
                },
                {
                    slug: "installation",
                },
                {
                    label: "Components",
                    autogenerate: {directory: "components"},
                },
            ],
            customCss: [
                './src/styles/global.css',
            ]
        }),
        lit(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});