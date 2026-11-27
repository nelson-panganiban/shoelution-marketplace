const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Shoelution</h1><p>Every pair deserves another step.</p>");
});

app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});