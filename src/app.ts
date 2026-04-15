import express from "express";

export const app = express();

app.get("/weather", (req, res) => {
  res.json({ temperature: 25, condition: "Sunny" });
});
