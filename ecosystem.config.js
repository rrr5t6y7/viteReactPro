module.exports = {
  apps: [
    {
      name: "vite-h5",
      script: "vite-h5-server.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "175.24.112.44",
      ref: "origin/master",
      repo: "git@github.com:rrr5t6y7/viteReactPro.git",
      path: "/home/nginx/www/wpps/",
      "post-deploy":
        "git reset --hard && git checkout master && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js", // -production=false 下载全量包
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
