const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
require("dotenv").config({ path: "./env" });

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//routes
const bookRoute = require("./routes/book.route");
const uploadRoute = require('./routes/upload.route')
app.use("/api/book", bookRoute);
app.use("/api", uploadRoute)

//config static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
 
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server book started on ${PORT}`);
});
