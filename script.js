function convert() {
  const type = document.getElementById("unitType").value;
  const input = parseFloat(document.getElementById("inputValue").value);
  let output = "";

  if (isNaN(input)) {
    output = "Please enter a valid number.";
  } else {
    if (type === "temp") {
      output = `${input}°C = ${(input * 9/5 + 32).toFixed(2)}°F`;
    } else if (type === "distance") {
      output = `${input} km = ${(input * 0.621371).toFixed(2)} miles`;
    } else if (type === "weight") {
      output = `${input} kg = ${(input * 2.20462).toFixed(2)} lbs`;
    }
  }

  document.getElementById("result").innerText = output;
}
