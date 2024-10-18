// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://onhive.io',
  integrations: [starlight({
    title: 'OnHive.io',
    logo: {
      src: './src/assets/hive.svg'
    },
    social: {
      email: 'mailto:info@onhive.io',
      github: 'https://github.com/instytutfi'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[list] Features',
      link: '/features/'
    }, {
      label: '[box] Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: '[book] Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro'
    },
    customCss: [
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});
