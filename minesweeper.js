document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [
    { row: 0, col: 0, isMine: false }, 
    { row: 1, col: 0, isMine: false }, 
    { row: 0, col: 1, isMine: false }, 
    { row: 1, col: 1, isMine: false }
  ]
}

function startGame () {
  var ok = lib.initBoard()
  if (!ok) {
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

