document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row:0, col:0, isMine: true, hidden: true},
    {row:0, col:1, isMine: true, hidden: true},
    {row:0, col:2, isMine: true, hidden: true},
    {row:1, col:0, isMine: true, hidden: true},
    {row:1, col:1, isMine: false, hidden: true},
    {row:1, col:2, isMine: false, hidden: true},
    {row:2, col:0, isMine: true, hidden: true},
    {row:2, col:1, isMine: true, hidden: true},
    {row:2, col:2, isMine: false, hidden: true},
  ]


}

function startGame () {
  let cell = 0;
  for (cell in board.cells){
    board.cells[cell].surroundingMines = countSurroundingMines(cell);
  }


  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);


  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
// define win first?
/*let checkMine = 0
for (checkMine in board.cells){
if (board.cells[checkMine].isMine === true && board.cells[checkMine].isMarked === true || board.cells[checkMine].isMine === false && board.cells[checkMine].hidden === false){
  //code to make game continue - loop for continue
  let checkCell = 0
  for (checkCell in board.cells){
    if (board.cells[checkCell].isMine === true && board.cells[checkCell].isMarked === false || board.cells[checkCell].isMine === false && board.cells[checkCell].hidden === true ){
      return
    } else if (board.cells[checkCell].isMine === false && board.cells[checkCell].hidden === true){
      return
    } else if (board.cells[checkCell].isMine === false && board.cells[checkCell].hidden === false){
      return lib.displayMessage('ahha');
    }
    //} else if (board.cells[checkCell].isMine === false && board.cells[checkCell].hidden === false){
      //return lib.displayMessage('You Win!')
    }
  }
}*/


  //only requires 1 mine checked and 1 non-mine checked to trigger win...
  let nonMine = 0;
  let markedMine = 0;

  let checkCell = 0;
  for (checkCell in board.cells){
    if (board.cells[checkCell].hidden === true && board.cells[checkCell].isMine === false){
       nonMine += 0;

    } else if (board.cells[checkCell].isMine === true && board.cells[checkCell].isMarked === false){
        markedMine += 0;
    } else if (board.cells[checkCell].hidden === false && board.cells[checkCell].isMine === false){
        nonMine += 1;
    } else if (board.cells[checkCell].isMine === true && board.cells[checkCell].isMarked === true){
       markedMine += 1;
    }
}
if (nonMine == 3 && markedMine == 6){
return lib.displayMessage('You Win!')
}


    /*if (board.cells[checkCell].hidden === false && board.cells[checkCell].isMine === false){
      let checkMarked = 0
      for (checkMarked in board.cells){
        if (board.cells[checkMarked].isMine === true && board.cells[checkMarked].isMarked === false){

        } else if (board.cells[checkMarked].isMine === true && board.cells[checkMarked].isMarked === true){
          let checkAgain = 0
          for (checkAgain in board.cells){
            if (board.cells[checkAgain].isMine === true && board.cells[checkAgain].isMarked === false){

            } else if (board.cells[checkAgain].isMine === false && board.cells[checkAgain].hidden === true){

            } else if (board.cells[checkAgain].isMine === true && board.cells[checkAgain].hidden === false){
            return lib.displayMessage('You Win!')
            }
          }
        }


      }
    }*/





//}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surroundingCells = lib.getSurroundingCells(board.cells.row, board.cells.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(board.cells[cell].row, board.cells[cell].col);

let count = 0;
let selectedCell = 0;

  for (selectedCell in surroundingCells) {
    if (surroundingCells[selectedCell].isMine == true) {
      count += 1;
    }
  }
  return count;
}
