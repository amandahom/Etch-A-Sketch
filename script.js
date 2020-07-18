// TODO colors https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/

;(function () {
  // Function to create the grid
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

  // Getting a random color
  function setColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  // Applying random color to boxes
  function clickColor() {
    let colorButton = document.getElementById('color')
    colorButton.addEventListener('click', function (e) {
      console.log('Click Color')
    })
  }

  // Applying black color to boxes
  function clickBlack() {
    let blackButton = document.getElementById('black')
    blackButton.addEventListener('click', function (e) {
      console.log('Click Black')
      // @TODO
    })
  }

  function sizePrompt() {
    let response = prompt('How many squares by squares would you like? Max: 16.')

    if (response == '') {
      return alert('Please input a number and try again.')
    } else if (isNaN(response)) {
      return alert('Not a number! Please enter a number.')
    }

    return parseInt(response)
  }

  function boxesHover() {
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(function (box) {
      box.addEventListener('click', function (e) {
        console.log('Click Event', e)
        // @TODO Figure out the element
        // Add your logic to the element base on click
      })

      box.addEventListener('mouseover', function (e) {
        console.log('Mouse Over', e)
        // @TODO Figure out the element
        // Add your logic to the element base on mouseover
      })
    })
  }

  function main() {
    document.addEventListener('DOMContentLoaded', function () {
      gridCreate(16)
      clickColor()
      clickBlack()

      boxesHover()

      // Size Prompt
      const sizeMessage = document.querySelector('#size')
      sizeMessage.addEventListener('click', sizePrompt)
    })
  }

  main()
})()
