import * as express from "express";
import apiV0Router from "./src/router";
const app = express();

app.use(express.json());


// Add routes
app.use("/api/v0", apiV0Router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send("SERVER_ERROR");
});

export default app;