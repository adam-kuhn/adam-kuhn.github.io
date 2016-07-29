var lib = {
  refresh: refresh,
  displayMessage: displayMessage,
  getSurroundingCells: getSurroundingCells
}

// Draw the game board based on the structure of 
function refresh () {
  var boardNode = document.getElementsByClassName('board')[0]
  truncateBoard(boardNode)
  if (!tests.boardValid() || !tests.cellsValid()) {
    return null
  }
  displayMessage("Let\'s play!")
  drawBoard(boardNode)
  addListeners(boardNode)
  return true
}

// Remove all child DOM nodes inside board
function truncateBoard (boardNode) {
  while (boardNode.firstChild) {
    boardNode.removeChild(boardNode.firstChild)
  }
}

// Draw board based on number of cells and an assumption about how much 
// space should be allowed for each cell.
function drawBoard (boardNode) {
  boardNode.style.width = Math.sqrt(board.cells.length) * 85 + 'px'
  board.cells.reduce(cellsToNodes, boardNode)
}

function cellsToNodes (boardNode, cell) {
  var node = document.createElement('div')
  node.classList.add('row-' + cell.row)
  node.classList.add('col-' + cell.col)
  if (cell.isMine) {
    node.classList.add('mine')
  }
  if (cell.hidden) {
    node.classList.add('hidden')
  } else {
    if (cell.surroundingMines && !cell.isMine) {
      node.innerHTML = cell.surroundingMines
    }
  }
  boardNode.appendChild(node)
  return boardNode
}

function addListeners (boardNode) {
  for (var i = 0; i < boardNode.children.length; i++) {
    boardNode.children[i].addEventListener('click', showCell)
    //cell.addEventListener('contextmenu', markCell)
  }
}

function showCell (evt) {
  evt.target.classList.remove('hidden')
  if (evt.target.classList.contains('mine')) {
    revealMines()
    return
  }
  showSurrounding(evt.target)
}

// Array.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict'
    var O = Object(this)
    var len = parseInt(O.length, 10) || 0
    if (len === 0) {
      return false
    }
    var n = parseInt(arguments[1], 10) || 0
    var k
    if (n >= 0) {
      k = n
    } else {
      k = len + n
      if (k < 0) {k = 0}
    }
    var currentElement
    while (k < len) {
      currentElement = O[k]
      if (searchElement === currentElement) { // NaN !== NaN
        return true
      }
      k++
    }
    return false
  }
}

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
  var limit = Math.sqrt(board.cells.length)
  return n + 1 > limit ? limit : n + 1
}

function displayMessage (msg) {
  document.getElementById('message').innerHTML = '<p>' + msg + '</p>'
}

