import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/dbConfig.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("SERVER ERROR ❌ ", err);
      process.exit(1);
    });

    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log(`⚙️  SERVER is RUNNING at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED ❌ ", err);
  });
