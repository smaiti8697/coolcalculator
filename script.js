function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculateResult() {
  var result = document.getElementById("result").value;
  var calculatedResult = eval(result);
  document.getElementById("result").value = calculatedResult;
}
