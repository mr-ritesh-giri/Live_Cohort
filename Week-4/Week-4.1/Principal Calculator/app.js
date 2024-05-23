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

  const response = await fetch(
    `http://localhost:4000/calculate?principal=${principal}&rate=${rate}&time=${time}`
  );
  const result = await response.json();
  ans.innerHTML = `Principal: ${result.principal}, Interest: ${result.interest}`;
}

// `https://sum-server.100xdevs.com/interest?principal=${principal}&rate=${rate}&time=${time}`
