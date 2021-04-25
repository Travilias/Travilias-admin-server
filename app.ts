import * as express from "express";
import apiV0Router from "./src/router";
import * as cors from 'cors';
const app = express();

app.use(express.json());

const corsOptions: cors.CorsOptions = {
  origin: "*", // TODO : Can we do something ???
  optionsSuccessStatus: 200,
  exposedHeaders: "x-access-token",
};

app.use(cors(corsOptions));



// Add routes
app.use("/api/v0", apiV0Router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send("SERVER_ERROR");
});

export default app;