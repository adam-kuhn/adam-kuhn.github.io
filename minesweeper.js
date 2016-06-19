document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: []
}

function startGame () {
  var elements = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < elements.length; i++) {
    addCellToBoard(elements[i])
    addListeners(elements[i])
  }
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
}

function addCellToBoard (element) {
  var newCell = {}
  newCell.row = getRow(element)
  newCell.col = getCol(element)
  newCell.isMine = element.classList.contains('mine')
  board.cells.push(newCell)
}

function addListeners (element) {
  element.addEventListener('click', showCell)
  element.addEventListener('contextmenu', markCell)
}

function showCell (e) {
  e.target.classList.remove('hidden')
  showSurrounding(e.target)
  checkForWin()
}

function markCell (e) {
  e.preventDefault()
  e.target.classList.toggle('marked')
  e.target.classList.remove('hidden')
  e.target.innerHTML = ''
  board.cells
    .find(function (cell) {
      return cell.row === getRow(e.target) && cell.col === getCol(e.target)
    })
    .isMarked = true
  checkForWin()
}

function checkForWin () {
  if (board.cells.filter(function (cell) {
    return cell.isMine && !cell.isMarked
  }).length > 0) {
    return
  }
  var cells = document.getElementsByClassName('board')[0]
  if (cells.getElementsByClassName('hidden').length > 0) {
    return
  }
  alert('WIN')
}

function countSurroundingMines (cell) {
  return getSurroundingCells(cell.row, cell.col)
    .filter(function (adjacentCell) {
      return adjacentCell.isMine
    }).length;
}

function getRow (element) {
  return getLoc(element, 'row')
}

function getCol (element) {
  return getLoc(element, 'col')
}

function getLoc(element, coordinate) {
  for (var i = 0; i < element.classList.length; i++) {
    if (element.classList[i].substring(0, 3) === coordinate) {
      return parseInt(element.classList[i].split('-')[1], 10)
    }
  }
  return null
}
