document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  addListeners()
}

function addListeners () {
  var cells = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', showCell)
    cells[i].addEventListener('contextmenu', markCell)
  }
}

function showCell (e) {
  e.target.classList.remove('hidden')
}

function markCell (e) {
  e.preventDefault()
  e.target.classList.add('marked')
}
