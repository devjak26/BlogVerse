import express from "express";
import Router from "./routes/route.js";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", Router);
// app.use("/", express.static("./public/build"));
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
