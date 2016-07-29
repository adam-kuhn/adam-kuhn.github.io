document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: true, hidden: false }, 
    { row: 0, col: 1, isMine: false, hidden: true }, 
    { row: 0, col: 2, isMine: true, hidden: true }, 
    { row: 0, col: 3, isMine: true, hidden: false }, 
    { row: 0, col: 4, isMine: true, hidden: false }, 
    { row: 0, col: 5, isMine: true, hidden: false }, 
    { row: 0, col: 6, isMine: true, hidden: false }, 
    { row: 0, col: 7, isMine: false, hidden: true }, 
    { row: 1, col: 0, isMine: true, hidden: true }, 
    { row: 1, col: 1, isMine: false, hidden: true }, 
    { row: 1, col: 2, isMine: true, hidden: true }, 
    { row: 1, col: 3, isMine: false, hidden: true }, 
    { row: 1, col: 4, isMine: true, hidden: true }, 
    { row: 1, col: 5, isMine: false, hidden: true }, 
    { row: 1, col: 6, isMine: true, hidden: true }, 
    { row: 1, col: 7, isMine: true, hidden: true }, 
    { row: 2, col: 0, isMine: false, hidden: true }, 
    { row: 2, col: 1, isMine: true, hidden: true }, 
    { row: 2, col: 2, isMine: false, hidden: true }, 
    { row: 2, col: 3, isMine: true, hidden: true }, 
    { row: 2, col: 4, isMine: true, hidden: true }, 
    { row: 2, col: 5, isMine: false, hidden: true }, 
    { row: 2, col: 6, isMine: true, hidden: true }, 
    { row: 2, col: 7, isMine: false, hidden: true }, 
    { row: 3, col: 0, isMine: true, hidden: true },
    { row: 3, col: 1, isMine: true, hidden: false }, 
    { row: 3, col: 2, isMine: false, hidden: true }, 
    { row: 3, col: 3, isMine: true, hidden: true }, 
    { row: 3, col: 4, isMine: true, hidden: false }, 
    { row: 3, col: 5, isMine: true, hidden: false }, 
    { row: 3, col: 6, isMine: true, hidden: false }, 
    { row: 3, col: 7, isMine: true, hidden: false }, 
    { row: 4, col: 0, isMine: true, hidden: false }, 
    { row: 4, col: 1, isMine: false, hidden: true }, 
    { row: 4, col: 2, isMine: true, hidden: true }, 
    { row: 4, col: 3, isMine: true, hidden: false }, 
    { row: 4, col: 4, isMine: true, hidden: false }, 
    { row: 4, col: 5, isMine: true, hidden: false }, 
    { row: 4, col: 6, isMine: true, hidden: false }, 
    { row: 4, col: 7, isMine: false, hidden: true }, 
    { row: 5, col: 0, isMine: true, hidden: false }, 
    { row: 5, col: 1, isMine: false, hidden: true }, 
    { row: 5, col: 2, isMine: true, hidden: true }, 
    { row: 5, col: 3, isMine: true, hidden: false }, 
    { row: 5, col: 4, isMine: true, hidden: false }, 
    { row: 5, col: 5, isMine: true, hidden: false }, 
    { row: 5, col: 6, isMine: true, hidden: false }, 
    { row: 5, col: 7, isMine: false, hidden: true }, 
    { row: 6, col: 0, isMine: true, hidden: false }, 
    { row: 6, col: 1, isMine: false, hidden: true }, 
    { row: 6, col: 2, isMine: true, hidden: true }, 
    { row: 6, col: 3, isMine: true, hidden: false }, 
    { row: 6, col: 4, isMine: true, hidden: false }, 
    { row: 6, col: 5, isMine: true, hidden: false }, 
    { row: 6, col: 6, isMine: true, hidden: false }, 
    { row: 6, col: 7, isMine: false, hidden: true },
    { row: 7, col: 0, isMine: true, hidden: false }, 
    { row: 7, col: 1, isMine: false, hidden: true }, 
    { row: 7, col: 2, isMine: true, hidden: true }, 
    { row: 7, col: 3, isMine: true, hidden: false }, 
    { row: 7, col: 4, isMine: true, hidden: false }, 
    { row: 7, col: 5, isMine: true, hidden: false }, 
    { row: 7, col: 6, isMine: true, hidden: false }, 
    { row: 7, col: 7, isMine: false, hidden: false } 
  ]
}

function startGame () {
  // Don't remove this if statement: it makes the game work!
  if (!lib.refresh()) {
    return
  }

  //var elements = document.getElementsByClassName('board')[0].children
  //for (var i = 0; i < elements.length; i++) {
    //addCellToBoard(elements[i])
    //addListeners(elements[i])
  //}
  //for (var i = 0; i < board.cells.length; i++) {
    //board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  //}
}

function addCellToBoard (element) {
  //var newCell = {}
  //newCell.row = getRow(element)
  //newCell.col = getCol(element)
  //newCell.isMine = element.classList.contains('mine')
  //board.cells.push(newCell)
}

function checkForWin () {
  //if (board.cells.filter(function (cell) {
    //return cell.isMine && !cell.isMarked
  //}).length > 0) {
    //return
  //}
  //var cells = document.getElementsByClassName('board')[0]
  //if (cells.getElementsByClassName('hidden').length > 0) {
    //return
  //}
  //alert('WIN')
}

function countSurroundingMines (cell) {
  //return getSurroundingCells(cell.row, cell.col)
    //.filter(function (adjacentCell) {
      //return adjacentCell.isMine
    //}).length;
}

