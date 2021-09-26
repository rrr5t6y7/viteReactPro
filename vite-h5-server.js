const server = require("pushstate-server");

server.start({
  port: 5021,
  directory: "./wpps/viteReact/source/dist",
});
