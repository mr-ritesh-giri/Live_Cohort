let timeout;

function debouncingCalculate() {
  clearTimeout(timeout); // Use clearTimeout instead of clearInterval

  timeout = setTimeout(() => {
    calculate();
  }, 1000);
}

async function calculate() {
  const principalInput = document.getElementById("principal").value.trim();
  const rateInput = document.getElementById("rate").value.trim();
  const timeInput = document.getElementById("time").value.trim();
  const ans = document.getElementById("ans");

  if (principalInput === "" || rateInput === "" || timeInput === "") {
    ans.innerHTML = "Please enter valid numeric values for all fields.";
    return;
  }

  const principal = parseInt(principalInput);
  const rate = parseInt(rateInput);
  const time = parseInt(timeInput);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    ans.innerHTML = "Please enter valid numeric values for all fields.";
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:4000/principal?principal=${principal}&rate=${rate}&time=${time}`
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    ans.innerHTML = `Principal: ${result.principal}, Interest: ${result.interest}`;
  } catch (error) {
    ans.innerHTML = `Error: ${error.message}`;
  }
}
