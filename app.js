const express = require("express");
const flash = require("connect-flash");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
// const ownersRouter = require("./routes/ownersRouter");
const indexRouter = require("./routes/index");
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./config/mongoose-connection");

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/uploads", express.static("uploads"));

app.listen(3000);
