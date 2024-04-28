import express from "express";
const app = express();

app.get("/api/v1/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));
