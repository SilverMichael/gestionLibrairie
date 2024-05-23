const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = 5002;

app.get("/", (req, res) => {
  res.send("HELLO TO MY GAATEWAY");
});

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

app.use(
  "/user",
  createProxyMiddleware({
    target: "http://localhost:5000/api/user",
    pathRewrite: {
      "^/user": "",
    },
    
  })
);


app.use(
  "/book",
  createProxyMiddleware({
    target: "http://localhost:5001/api/book",
    pathRewrite: {
      "book": "",
    },
  })
);

app.use(
  "/upload",
  createProxyMiddleware({
    target: "http://localhost:5001/api/upload",
    pathRewrite: {
      "^upload": "",
    },
  })
);
app.use(
  "/uploads",
  createProxyMiddleware({
    target: "http://localhost:5001/uploads",
    pathRewrite: {
      "/uploads": "",
    },
  })
);

app.listen(PORT, () => {
  console.log("API Gateway run on port ", PORT);
});
