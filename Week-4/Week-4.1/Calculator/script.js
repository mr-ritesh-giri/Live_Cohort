async function populateDiv() {
  const a = parseInt(document.getElementById("one").value);
  const b = parseInt(document.getElementById("two").value);
  //   const solution = (document.getElementById("finalSum").innerHTML = sum);

  await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);

  //   let sum = firstNum + secondNum;
}
