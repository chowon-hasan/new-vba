const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.APP_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      console.log("Request URL:", req.url);
      console.log("Parsed URL:", parsedUrl);

      if (pathname === "/a") {
        console.log("Handling /a route");
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        console.log("Handling /b route");
        await app.render(req, res, "/b", query);
      } else {
        console.log("Handling other routes");
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
