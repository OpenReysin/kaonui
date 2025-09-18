import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'KaonUI',
      description: 'A modern component library with Lit and Vue wrappers',
      social: {
        github: 'https://github.com/Conventional-Convention/kaonui',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/introduction/' },
            { label: 'Installation', link: '/installation/' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Button', link: '/components/button/' },
            { label: 'Card', link: '/components/card/' },
          ],
        },
        {
          label: 'Frameworks',
          items: [
            { label: 'Lit Elements', link: '/frameworks/lit/' },
            { label: 'Vue Components', link: '/frameworks/vue/' },
          ],
        },
      ],
    }),
  ],
});