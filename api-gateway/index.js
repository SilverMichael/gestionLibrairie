const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = 5002;

app.get("/", (req, res) => {
  res.send("HELLO TO MY GAATEWAY");
});

app.use(
  "/user",
  createProxyMiddleware({
    target: "http://localhost:5000",
    pathRewrite: {
      "^/api/user": "",
    },
  })
);

app.use(
  "/book",
  createProxyMiddleware({
    target: "http://localhost:5001",
    pathRewrite: {
      "^/api/book": "",
    },
  })
);

app.use(
  "/upload",
  createProxyMiddleware({
    target: "http://localhost:5001",
    pathRewrite: {
      "^/api/upload": "",
    },
  })
);
app.use(
  "/uploads",
  createProxyMiddleware({
    target: "http://localhost:5001",
    pathRewrite: {
      "^/uploads": "",
    },
  })
);

app.listen(PORT, ()=> {
    console.log("API Gateway run on port ", PORT)
})
