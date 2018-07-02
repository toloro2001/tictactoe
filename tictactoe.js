console.log("hi");
var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
        <td id="1"></td>
        <td id="2"></td>
        <td id="3"></td>
        <td id="4"></td>
        <td id="5"></td>
        <td id="6"></td>
        <td id="7"></td>
        <td id="8"></td>
        <td id="9"></td>
  handleClick = function(event) {
    var cell = event.target
    console.log("cell Id"+cell.id);
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }
  