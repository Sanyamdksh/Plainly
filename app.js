const express = require("express");
const flash = require("connect-flash");
const app = express();
app.set("trust proxy", 1);
const cookieParser = require("cookie-parser");
const path = require("path");
const adminAnalytics = require("./routes/admin-analytics");
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
    origin: "https://plainly-eight.vercel.app",
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
app.use("/admin", adminAnalytics);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
