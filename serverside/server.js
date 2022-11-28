const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {bdport,mongoUri}  = require("./api/config/vars");
const frontRoutes = require("./api/routes/v1/front/index");

const port = bdport;
// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/v1/front',frontRoutes);

app.listen(port, () => {
    // perform a database connection when server starts
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(mongoUri,{useNewUrlParser:true});
const db = mongoose.connection;
db.on("error", (err) => {
    console.log(err);
})
db.once("open", () => console.log("Connected to database"));
