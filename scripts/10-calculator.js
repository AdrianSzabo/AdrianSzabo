let calculation = localStorage.getItem("calculation") || "0";
displayCalculation();

function updateCalculation(value) {
  if (
    calculation === "0" &&
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(value))
  ) {
    calculation = value;
  } else {
    calculation += value;
  }
  console.log(calculation);
  localStorage.setItem("calculation", calculation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-result-of-calculation").innerHTML = calculation;
}

function clearCalculator() {
  calculation = "0";
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}
