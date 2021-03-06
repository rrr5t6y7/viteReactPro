import { defineConfig } from "vite";
import styleImport from "vite-plugin-style-import";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: "zarm",
          esModule: true,
          resolveStyle: (name) => {
            return `zarm/es/${name}/style/css`;
          },
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  base: "/viteReact/source/dist/",
  publicDir: "http://175.24.112.44/viteReact/source/dist/",
  // outDir: "./wpps/viteReact/source/dist",
  server: {
    proxy: {
      "/api": {
        // 当遇到 /api 路径时，将其转换成 target 的值
        // target: "http://api.chennick.wang/api/",
        target: "http://127.0.0.1:7001/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
      },
      "/public": { target: "http://127.0.0.1:7001/", changeOrigin: true },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // src 路径
      utils: path.resolve(__dirname, "src/utils"), // src 路径
    },
  },
});
