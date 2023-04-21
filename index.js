const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose-connection");

app.use(express.urlencoded({ extended: true }));
// use set static folder
app.use(express.static("./assets"));
// use express layouts
app.use(expressLayouts);
//  extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});
