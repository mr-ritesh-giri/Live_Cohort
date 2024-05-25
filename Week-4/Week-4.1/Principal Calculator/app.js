let timeout;
function debouncingCalculate() {
  clearInterval(timeout);

  timeout = setTimeout(() => {
    calculate();
  }, 1000);
}

async function calculate() {
  const principal = parseInt(document.getElementById("principal").value);
  const rate = parseInt(document.getElementById("rate").value);
  const time = parseInt(document.getElementById("time").value);
  const ans = document.getElementById("ans");

  // if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
  //   ans.innerHTML = "Please enter valid numeric values for all fields.";
  //   return;
  // }

  try {
    const response = await fetch(
      `http://localhost:4000/calculate?principal=${principal}&rate=${rate}&time=${time}`
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

// `https://sum-server.100xdevs.com/interest?principal=${principal}&rate=${rate}&time=${time}`
