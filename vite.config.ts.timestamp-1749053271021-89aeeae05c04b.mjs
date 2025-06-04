// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import compression from "file:///home/project/node_modules/vite-plugin-compression/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]
        ]
      }
    }),
    compression({
      algorithm: "gzip",
      ext: ".gz"
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br"
    })
  ],
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore", "firebase/analytics"],
    exclude: ["react-error-boundary"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ["firebase/app", "firebase/auth", "firebase/firestore", "firebase/analytics"],
          vendor: ["react", "react-dom", "react-router-dom"],
          form: ["react-hook-form"],
          charts: ["recharts"],
          icons: ["lucide-react"]
        }
      }
    },
    chunkSizeWarningLimit: 1e3,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    reportCompressedSize: false
  },
  server: {
    warmup: {
      clientFiles: [
        "./src/pages/Login.tsx",
        "./src/pages/Dashboard.tsx"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIFsnQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcmVhY3QtanN4JywgeyBydW50aW1lOiAnYXV0b21hdGljJyB9XVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSksXG4gICAgY29tcHJlc3Npb24oe1xuICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsXG4gICAgICBleHQ6ICcuZ3onLFxuICAgIH0pLFxuICAgIGNvbXByZXNzaW9uKHtcbiAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgIGV4dDogJy5icicsXG4gICAgfSksXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsnZmlyZWJhc2UvYXBwJywgJ2ZpcmViYXNlL2F1dGgnLCAnZmlyZWJhc2UvZmlyZXN0b3JlJywgJ2ZpcmViYXNlL2FuYWx5dGljcyddLFxuICAgIGV4Y2x1ZGU6IFsncmVhY3QtZXJyb3ItYm91bmRhcnknXVxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICBmaXJlYmFzZTogWydmaXJlYmFzZS9hcHAnLCAnZmlyZWJhc2UvYXV0aCcsICdmaXJlYmFzZS9maXJlc3RvcmUnLCAnZmlyZWJhc2UvYW5hbHl0aWNzJ10sXG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgZm9ybTogWydyZWFjdC1ob29rLWZvcm0nXSxcbiAgICAgICAgICBjaGFydHM6IFsncmVjaGFydHMnXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtcmVhY3QnXVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2VcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgd2FybXVwOiB7XG4gICAgICBjbGllbnRGaWxlczogW1xuICAgICAgICAnLi9zcmMvcGFnZXMvTG9naW4udHN4JyxcbiAgICAgICAgJy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC50c3gnXG4gICAgICBdXG4gICAgfVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUCxDQUFDLHFDQUFxQyxFQUFFLFNBQVMsWUFBWSxDQUFDO0FBQUEsUUFDaEU7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQixpQkFBaUIsc0JBQXNCLG9CQUFvQjtBQUFBLElBQ3JGLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxFQUNsQztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osVUFBVSxDQUFDLGdCQUFnQixpQkFBaUIsc0JBQXNCLG9CQUFvQjtBQUFBLFVBQ3RGLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsVUFDakQsTUFBTSxDQUFDLGlCQUFpQjtBQUFBLFVBQ3hCLFFBQVEsQ0FBQyxVQUFVO0FBQUEsVUFDbkIsT0FBTyxDQUFDLGNBQWM7QUFBQSxRQUN4QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxJQUN2QixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
