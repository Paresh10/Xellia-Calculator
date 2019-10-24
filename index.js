//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// I am having trouble executing this code. It was working before I added
// bootstrap and CSS for designing (design is still under development).
// I have been doing a lot of research but cannot figure out the problem.

app.post("/", function(req, res) {
  let vancomycin = parseFloat(req.body.vancomycin);
  let diluent = parseFloat(req.body.diluent);
  let ancillary = parseFloat(req.body.ancillary);
  let waste = parseFloat(req.body.waste);
  let tHourly = parseFloat(req.body.tHourly);
  let pHourly = parseFloat(req.body.pHourly);
  let tMinutes = parseFloat(req.body.tMinutes);
  let pMinutes = parseFloat(req.body.pMinutes);

  let supplyCost = vancomycin + diluent + ancillary;
  let laborCost = (pHourly * pMinutes / 60) + (tHourly * tMinutes / 60);

  let totalCost = (supplyCost + laborCost) * (1 + waste);

  res.send("Total cost per dose is " + totalCost.toFixed(2));
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
