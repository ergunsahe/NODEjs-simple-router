const express = require("express")
const path = require("path")

const app = express()
const port = 5000;
const IndexRouter = require("./router/index")
const RegisterRouter = require("./router/register")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views") )

app.use("/", IndexRouter)
app.use("/register", RegisterRouter)

app.listen(port)