var lib = {
  initBoard: initBoard
}

function initBoard () {
  if (!isValid()) {
    return null
  }
  displayMessage('Let\'s play!')
}

function isValid() {
  if (typeof board !== 'object') {
    displayMessage('Remember to define your <code>board</code> object!')
    return false
  }
  if (!board.hasOwnProperty('cells')) {
    displayMessage('Your <code>board</code> object needs a property named <code>cells</code>.')
    return false
  }
  if (!isArray(board.cells)) {
    displayMessage('<code>board.cells</code> should be an array.')
    return false
  }
  return true
}

function displayMessage (msg) {
  document.getElementById('message').innerHTML = '<p>' + msg + '</p>'
}

function isArray(a) {
  return Object.prototype.toString.call(a) === '[object Array]' 
}
