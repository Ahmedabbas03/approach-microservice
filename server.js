const express = require("express");
const bodyParser = require("body-parser");
const interpretRoute = require("./routes/interpretRoute");

const app = express();
app.use(bodyParser.json());

// Route for interpretation
app.use("/api", interpretRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
