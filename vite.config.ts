import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression2";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    ViteImageOptimizer(),
    optimizeCssModules(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "src/main.tsx"),
        App: resolve(__dirname, "src/App.tsx"),
        Login: resolve(__dirname, "src/components/Login.tsx"),
        Classes: resolve(__dirname, "src/components/classes/Classes.tsx"),
        ClassSideNav: resolve(
          __dirname,
          "src/components/classes/ClassSideNav.tsx"
        ),
        MainContent: resolve(
          __dirname,
          "src/components/classes/mainContent/MainContent.tsx"
        ),
        MainCResource: resolve(
          __dirname,
          "src/components/classes/mainContent/MainCResource.tsx"
        ),
        MainCFooter: resolve(
          __dirname,
          "src/components/classes/mainContent/MainCFooter.tsx"
        ),
        MainCSections: resolve(
          __dirname,
          "src/components/classes/mainContent/mainCSections/MainCSections.tsx"
        ),
        MainCSCompiler: resolve(
          __dirname,
          "src/components/classes/mainContent/mainCSections/MainCSCompiler.tsx"
        ),
        MainCSDescription: resolve(
          __dirname,
          "src/components/classes/mainContent/mainCSections/MainCSDescription.tsx"
        ),
        MainCSNavbar: resolve(
          __dirname,
          "src/components/classes/mainContent/mainCSections/MainCSNavbar.tsx"
        ),
        MainCSResources: resolve(
          __dirname,
          "src/components/classes/mainContent/mainCSections/MainCSResources.tsx"
        ),
        Home: resolve(__dirname, "src/components/home/Home.tsx"),
        HomeAbout: resolve(__dirname, "src/components/home/HomeAbout.tsx"),
        HomeContact: resolve(__dirname, "src/components/home/HomeContact.tsx"),
        HomeFooter: resolve(__dirname, "src/components/home/HomeFooter.tsx"),
        HomeHeader: resolve(__dirname, "src/components/home/HomeHeader.tsx"),
        HomeNavigation: resolve(
          __dirname,
          "src/components/home/HomeNavigation.tsx"
        ),
        HomePortfolio: resolve(
          __dirname,
          "src/components/home/HomePortfolio.tsx"
        ),
        IndexMax: resolve(
          __dirname,
          "src/components/max/indexmax/IndexMax.tsx"
        ),
        Testimonials: resolve(
          __dirname,
          "src/components/max/testimonials/Testimonials.tsx"
        ),
        TestHeader: resolve(
          __dirname,
          "src/components/max/testimonials/TestHeader.tsx"
        ),
        Tutorials: resolve(
          __dirname,
          "src/components/max/tutorials/Tutorials.tsx"
        ),
        TutorialsBody: resolve(
          __dirname,
          "src/components/max/tutorials/TutorialsBody.tsx"
        ),
        AboutMax: resolve(
          __dirname,
          "src/components/max/templates/AboutMax.tsx"
        ),
        FooterMax: resolve(
          __dirname,
          "src/components/max/templates/FooterMax.tsx"
        ),
        HeaderMax: resolve(
          __dirname,
          "src/components/max/templates/HeaderMax.tsx"
        ),
        NavigationMax: resolve(
          __dirname,
          "src/components/max/templates/NavigationMax.tsx"
        ),
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src/')
    }
  },
  server: {
    open: false,
    port: 3001,
  },
});
