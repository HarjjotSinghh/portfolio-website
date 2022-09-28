import express from "express";
import { resolve } from "path";

const app = express();

app.use('/assets', express.static('assets'));

app.get("/", (req, res) => {
    res.sendFile(resolve("index2.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(resolve("about.html"));
});



app.listen(process.env.PORT || 3000, () => console.log("Server started: http://localhost:3000"));
