let timeout;

function debouncingCalculate() {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    calculate();
  }, 1000);
}

async function calculate() {
  const principalInput = document.getElementById("principal").value.trim();
  const rateInput = document.getElementById("rate").value.trim();
  const timeInput = document.getElementById("time").value.trim();
  const result = document.getElementById("ans");

  if (principalInput === "" || rateInput === "" || timeInput === "") {
    result.innerHTML = "Please fill all the values.";
    return;
  }

  const principalValue = parseInt(principalInput);
  const rateValue = parseInt(rateInput);
  const timeValue = parseInt(timeInput);

  if (isNaN(principalValue) || isNaN(rateValue) || isNaN(timeValue)) {
    result.innerHTML = "Value should be numbers only.";
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/solution?principal=${principalValue}&rate=${rateValue}&time=${timeValue}`
    );

    if (!response.ok) {
      throw new Error("Data cannot be fetched at the moment.");
    }

    const value = await response.json();
    const interest = (principalValue * rateValue * timeValue) / 100;

    result.innerHTML = `Principal: ${value.principal}, Interest: ${interest}`;
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
}
