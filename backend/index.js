/***
 
Main page of backend**/
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import riskRoutes from "./routes/riskRoutes.js";

const app = express();
const port = 5000;

// Connect/Express middleware
app.use(cors());

// app.use(express.json());
// looks at requests where the Content-Type: application/json
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

// object will contain values of any type instead of just strings
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

// a middleware mounted on /user; will be executed for any type of HTTP request to /user
app.use("/user", userRoutes);
app.use("/risk", riskRoutes);
app.get("/", (req, res) => {
  res.send("Hello to DB Helper API");
});

const PORT = process.env.PORT || 8080;
const CONNECTION_URL =
  "mongodb+srv://homydoct:PPNKVV03@cluster0.sw1i74j.mongodb.net/?retryWrites=true&w=majority";

// Connect to the database
mongoose
  .connect(CONNECTION_URL, {
    dbName: "MernDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
