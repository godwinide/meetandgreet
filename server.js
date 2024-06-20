const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// CONFIGS
require("dotenv").config();
// MIDDLEWARES
app.use(express.static('./public'))
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


const PORT = process.env.PORT || 2022;

// URLS
app.use("/api", require("./routes/api/index"));

app.use("/buy", (req, res) => {
    return res.sendFile(path.join(__dirname, "public/_next/server/app/buy.html"))
});
app.use("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "public/_next/server/app/index.html"))
});


app.listen(PORT, () => console.log(`server started on port ${PORT}`));