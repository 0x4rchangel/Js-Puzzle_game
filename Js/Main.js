window.addEventListener("load", (event) => {
  var rows;
  var columns;
  var moves = 0;
  var table;
  var countMoves;
  var boardArray;
  var playerName;
  var button = document.getElementById("startButton");
  button.addEventListener("click", start);
});

function start() {
  rows = document.getElementById("rowVal").value;
  columns = document.getElementById("columnVal").value;
  playerName = document.getElementById("playerName").value;
  if (!(rows > 1 && columns > 1 && rows < 6 && columns < 6)) {
    alert("Enter valid row and column values (2-5)");
  } else {
    document.getElementById("valueContainer").style.display = "none";
    document.getElementById("wrapper").style.display = "block";
    startNewGame();
  }
}
