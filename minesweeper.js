document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: false, hidden: false }, 
    { row: 0, col: 1, isMine: false, hidden: false }, 
    { row: 0, col: 2, isMine: true, hidden: true }, 
    { row: 1, col: 0, isMine: true, hidden: true }, 
    { row: 1, col: 1, isMine: false, hidden: true }, 
    { row: 1, col: 2, isMine: false, hidden: true }, 
    { row: 2, col: 0, isMine: false, hidden: true }, 
    { row: 2, col: 1, isMine: false, hidden: true }, 
    { row: 2, col: 2, isMine: false, hidden: true } 
  ]
}

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

  // Don't remove this if statement: it makes the game work!
  if (!lib.refresh()) {
    return
  }
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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  return surrounding.filter(function (adjacentCell) {
    return adjacentCell.isMine
  }).length;
}

