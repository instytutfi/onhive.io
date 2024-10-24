// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://onhive.io",
  experimental: {
    contentLayer: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  integrations: [
    starlight({
      title: "OnHive.io",
      logo: {
        src: "./src/assets/hcs.svg"
      },
      social: {
        github: "https://github.com/instytutfi/onhive.io"
      },
      sidebar: [
        {
          label: "[home] Home",
          link: "/"
        },
        {
          label: "[rocket] Get Started",
          link: "/get-started/"
        },
        {
          label: "[list] Blog",
          link: "/blog/"
        },
        {
          label: "[hive] Hive Coding School",
          autogenerate: {
            directory: "school"
          }
        },
        {
          label: "[box] Dev Tools",
          autogenerate: {
            directory: "tools"
          }
        },
        {
          label: "[list] Community",
          autogenerate: {
            directory: "community"
          }
        },
        {
          label: "leadingNavLinks",
          items: [{ label: "Blog", link: "/blog" }]
        }
      ],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Pagination: "./src/components/Pagination.astro",
        Hero: "./src/components/Hero.astro",
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro"
      },
      customCss: ["./src/styles/theme.css"],
      expressiveCode: {
        themes: ["github-dark"]
      },
      pagination: false,
      lastUpdated: true
    })
  ],
  output: "static"
});
