let timeout;
function debnouncePopulateDiv() {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    populateDiv();
  }, 1000);
}

async function populateDiv() {
  const a = parseInt(document.getElementById("one").value);
  const b = parseInt(document.getElementById("two").value);

  await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b).then(
    function (response) {
      console.log(response);
      response.text().then(function (ans) {
        console.log(ans);
        document.getElementById("finalSum").innerHTML = ans;
      });
    }
  );
}

// Another way to do this or we can say cleaner way.

// async function populateDiv() {
//   const a = parseInt(document.getElementById("one").value);
//   const b = parseInt(document.getElementById("two").value);

//   const response = await fetch(
//     "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
//   );
//   const ans = await response.text();

//   document.getElementById("finalSum").innerHTML = ans;
//   console.log(ans);
// }
