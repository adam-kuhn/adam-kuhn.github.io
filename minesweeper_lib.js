// Expects a `board` object in global scope
// Returns a subset of the `cells` array, including only those cells
// which are adjacent to `row`, `col`
function getSurroundingCells (row, col) {
  var columns = getRange(getLowerBound(col), getUpperBound(col))
  var rows = getRange(getLowerBound(row), getUpperBound(row))
  return board.cells
    .filter(function (cell) {
      return columns.includes(cell.col) && rows.includes(cell.row)
    })
}

// For the given DOM element, displays surrounding mine counts
// under the following conditions:
//  - cell is not a mine
//  - cell has not already been checked
function showSurrounding (element) {
  getSurroundingCells(getRow(element), getCol(element))
    .filter(function (cell) {
      return !cell.isMine
    })
    .filter(function (cell) {
      // Avoid breaking the call stack with recurrent checks on same cell
      return !cell.isProcessed
    })
    .forEach(setInnerHTML)
}

// For the given cell object, set innerHTML to cell.surroundingMines
// under the following conditions:
//  - cell has not been marked by the user
//  - surroundingMines is > 0
// If surroundingMines is 0, greedily attempt to expose as many more cells
// as possible.
function setInnerHTML (cell) {
  cell.isProcessed = true
  var rowClass = 'row-' + cell.row
  var colClass = 'col-' + cell.col
  var element = document.getElementsByClassName(rowClass + ' ' + colClass)[0]
  if (element.innerHTML !== '') {
    return
  }
  if (element.classList.contains('marked')) {
    return
  }
  element.innerHTML = cell.surroundingMines > 0 ? 
    cell.surroundingMines : ''
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden')
    if (cell.surroundingMines === 0) {
      return showSurrounding(element)
    }
  }
}

function getRange(begin, end) {
  return Array.apply(begin, Array(end - begin + 1))
    .map(function (n, i) {
      return begin + i
    })
}

function getLowerBound (n) {
  return n - 1 < 0 ? 0 : n -1
}

function getUpperBound (n) {
  var limit = board.MAX_CELLS-1 || 4
  return n + 1 > limit ? limit : n + 1
}
