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
        Login: resolve(__dirname, "src/pages/login/Login.tsx"),
        CreateUser: resolve(__dirname, "src/pages/login/CreateUser.tsx"),
        Classes: resolve(__dirname, "src/pages/classes/Classes.tsx"),
        ClassSideNav: resolve(__dirname, "src/pages/classes/ClassSideNav.tsx"),
        CreateClass: resolve(
          __dirname,
          "src/pages/createclass/CreateClass.tsx"
        ),
        CreateActivities: resolve(
          __dirname,
          "src/pages/createclass/CreateActivities.tsx"
        ),
        CreateLesson: resolve(
          __dirname,
          "src/pages/createclass/CreateLesson.tsx"
        ),
        CreateModule: resolve(
          __dirname,
          "src/pages/createclass/CreateModule.tsx"
        ),
        MainContent: resolve(
          __dirname,
          "src/pages/classes/mainContent/MainContent.tsx"
        ),
        MainCResource: resolve(
          __dirname,
          "src/pages/classes/mainContent/MainCResource.tsx"
        ),
        MainCFooter: resolve(
          __dirname,
          "src/pages/classes/mainContent/MainCFooter.tsx"
        ),
        MainCSections: resolve(
          __dirname,
          "src/pages/classes/mainContent/mainCSections/MainCSections.tsx"
        ),
        MainCSCompiler: resolve(
          __dirname,
          "src/pages/classes/mainContent/mainCSections/MainCSCompiler.tsx"
        ),
        MainCSDescription: resolve(
          __dirname,
          "src/pages/classes/mainContent/mainCSections/MainCSDescription.tsx"
        ),
        MainCSNavbar: resolve(
          __dirname,
          "src/pages/classes/mainContent/mainCSections/MainCSNavbar.tsx"
        ),
        MainCSResources: resolve(
          __dirname,
          "src/pages/classes/mainContent/mainCSections/MainCSResources.tsx"
        ),
        Home: resolve(__dirname, "src/pages/home/Home.tsx"),
        HomeAbout: resolve(__dirname, "src/pages/home/HomeAbout.tsx"),
        HomeContact: resolve(__dirname, "src/pages/home/HomeContact.tsx"),
        HomeFooter: resolve(__dirname, "src/pages/home/HomeFooter.tsx"),
        HomeHeader: resolve(__dirname, "src/pages/home/HomeHeader.tsx"),
        HomeNavigation: resolve(__dirname, "src/pages/home/HomeNavigation.tsx"),
        HomePortfolio: resolve(__dirname, "src/pages/home/HomePortfolio.tsx"),
        IndexMax: resolve(__dirname, "src/pages/max/indexmax/IndexMax.tsx"),
        Testimonials: resolve(
          __dirname,
          "src/pages/max/testimonials/Testimonials.tsx"
        ),
        TestHeader: resolve(
          __dirname,
          "src/pages/max/testimonials/TestHeader.tsx"
        ),
        Tutorials: resolve(__dirname, "src/pages/max/tutorials/Tutorials.tsx"),
        TutorialsBody: resolve(
          __dirname,
          "src/pages/max/tutorials/TutorialsBody.tsx"
        ),
        AboutMax: resolve(__dirname, "src/pages/max/templates/AboutMax.tsx"),
        FooterMax: resolve(__dirname, "src/pages/max/templates/FooterMax.tsx"),
        HeaderMax: resolve(__dirname, "src/pages/max/templates/HeaderMax.tsx"),
        NavigationMax: resolve(
          __dirname,
          "src/pages/max/templates/NavigationMax.tsx"
        ),
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src/"),
    },
  },
  server: {
    open: false,
    port: 3001,
  },
});
