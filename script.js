;(function() {
  // Create Grid
  function gridCreate(square) {
    let totalSquares = square * square
    for (let i = 0; i < totalSquares; i++) {
      let newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'box')
      let currentDiv = document.getElementById('container')
      currentDiv.appendChild(newDiv)
    }
    document.documentElement.style.setProperty('--gridRow', square)
    document.documentElement.style.setProperty('--gridCol', square)
  }

  // Black Effect
  function blackHover() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(function(box) {
      box.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = '#1a1c1b'
      })
    })
  }

  // Getting A Random Color
  function setColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  // Color Effect
  function colorHover() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(function(box) {
      box.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = setColor()
      })
    })
  }

  // Erase Effect
  function eraseHover() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(function(box) {
      box.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = '#FFF'
      })
    })
  }

  // Change Size Prompt
  function sizePrompt() {
    let response = prompt('How many squares by squares would you like? Min: 2 Max: 16.')
    if (response == '') {
      return alert('Please input a number and try again.')
    } else if (isNaN(response)) {
      return alert('Not a number! Please enter a number.')
    } else if (response < 2 || response > 16) {
      return alert('Please input a number between 2 and 16')
    }
    main(response, true)
  }

  // Reset The Grid
  function clickReset() {
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', function(e) {})
    resetGrid()
  }

  function resetGrid() {
    let reset = document.querySelectorAll('.box')
    reset.forEach(box => {
      box.style.backgroundColor = '#FFF'
    })
  }

  // Document's Main Function
  function main(square = 16, resize = false) {
    if (resize) {
      const myNode = document.getElementById('container')
      myNode.innerHTML = ''
    }
    gridCreate(square)
    blackHover()

    let colorButton = document.getElementById('color')
    colorButton.addEventListener('click', colorHover)

    let blackButton = document.getElementById('black')
    blackButton.addEventListener('click', blackHover)

    let sizeButton = document.querySelector('#size')
    sizeButton.addEventListener('click', sizePrompt)

    let eraseButton = document.getElementById('erase')
    eraseButton.addEventListener('click', eraseHover)

    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', clickReset)
  }
  document.addEventListener('DOMContentLoaded', function() {
    main()
  })
})()
