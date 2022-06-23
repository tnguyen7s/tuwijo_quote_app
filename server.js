// Import Express Package
const express = require("express");

// Initialize express
const app = express();

// Serve static build files from the "dist" directory
app.use(express.static("./dist/tuwijo-quote-app"));

// Route incoming server requests to the correct files
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/tuwijo-quote-app/" })
);

// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
