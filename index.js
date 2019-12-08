var returnCostPerDose = function(e) {
  e.preventDefault();
  let vancomycin = parseFloat(document.getElementById("vancomycinCost").value);
  let diluent = parseFloat(document.getElementById("diluentCost").value);
  let ancillary = parseFloat(document.getElementById("ancillaryCost").value);
  let waste = parseFloat(document.getElementById("wastePercentage").value);
  let tHourly = parseFloat(document.getElementById("tHourlyCost").value);
  let pHourly = parseFloat(document.getElementById("pHourlyCost").value);
  let tMinutes = parseFloat(document.getElementById("tMinutesCost").value);
  let pMinutes = parseFloat(document.getElementById("pMinutesCost").value);
  let supplyCost = vancomycin + diluent + ancillary;
  let laborCost = (pHourly * pMinutes / 60) + (tHourly * tMinutes / 60);
  let costPerDose = (supplyCost + laborCost) * (1 + (waste / 100));
  document.getElementById("output").innerHTML = "$" + costPerDose.toFixed(2);
}
