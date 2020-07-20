let letter = 'qwertyuioplmnjhgbvfcdxszak1234567890!@#$%^&*()_+='
let arrLetter = Array.from(letter)
let letterContainer = document.querySelector('.letters')
arrLetter.forEach(letter => {
  let span = document.createElement('span')
  let theLetter = document.createTextNode(letter)
  span.appendChild(theLetter)
  span.classList.add('letter-box')
  letterContainer.appendChild(span)
})

let words = {
  movies: [
    { el_khalia: 'ahmed ezz' },
    { zahaimar: 'adel emam' },
    { 'queset hop': 'ahmed hatem' }
  ],
  /*people: [
    'abo trieka',
    'messi',
    'ronaldo',
    'yusuf elsherief',
    'ronaldinho',
    'el hadary',
    'bell gates',
    'reem telbany'
  ],*/
  countries: [
    { 'capital of egypt': 'cairo' },
    { 'capital of lebanon': 'bairout' },
    { 'capital of england': 'london' },
    { 'capital of german': 'berlin' }
  ]
}
let allkeys = Object.keys(words)
let randomNumber = Math.floor(Math.random() * allkeys.length)
let randomKey = allkeys[randomNumber]
console.log(randomKey)
let randomValue = words[randomKey]
console.log(randomValue)
let randomValueNumber = Math.floor(Math.random() * randomValue.length)
let randomvvv = randomValue[randomValueNumber]
let allkeys2 = Object.keys(randomvvv)
let randomValueValue = randomValue[randomValueNumber][allkeys2]
console.log(randomValueValue)
document.querySelector('.gameinfo .category span').innerHTML = `${allkeys2}`
let letterGuessContainer = document.querySelector('.letters-guess')
let letterAndSpace = Array.from(randomValueValue)
letterAndSpace.forEach(letter => {
  let emptySpan = document.createElement('span')
  if (letter === ' ') emptySpan.classList = 'with-space'
  letterGuessContainer.appendChild(emptySpan)
})
let guessSpan = document.querySelectorAll('.letters-guess span')
let wrongAnswer = document.querySelector('.hangman-draw')
let wrong = 0
document.addEventListener('click', e => {
  let theStatus = false
  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked')
    let theClickedLetter = e.target.innerHTML.toLowerCase()
    let chosenWord = Array.from(randomValueValue.toLowerCase())
    chosenWord.forEach((letter, wordIndex) => {
      if (theClickedLetter == letter) {
        theStatus = true
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) span.innerHTML = letter
        })
      }
    })

    if (theStatus !== true) {
      wrong++
      wrongAnswer.classList.add(`wrong-${wrong}`)
      document.getElementById('fail').play()
      if (wrong === 8) {
        endGame()
        letterContainer.classList.add('finished')
        document.getElementById('wrong').play()
      }
    } else {
      document.getElementById('success').play()
      let z = 0
      guessSpan.forEach((span, spanIndex) => {
        let a = span.innerHTML
        if (a === '') z++
      })
      if (!z) {
        winning()
        letterContainer.classList.add('finished')
        document.getElementById('right').play()
      }
    }
  }
})

function endGame () {
  // Create Popup Div
  let div = document.createElement('div')
  let paragraph = document.createElement('p')

  // Create Text
  let paragraphText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  )

  // Append Text To Div
  paragraph.appendChild(paragraphText)

  // Add Class On Div
  div.className = 'popup'
  // Create Text

  // Append Text To Div
  div.appendChild(paragraph)

  // Add Class On Div
  div.className = 'popup'

  // Append To The Body
  let button = document.createElement('button')

  let buttonWrong = document.createTextNode('Again')
  button.className = 'btn'
  button.appendChild(buttonWrong)
  div.appendChild(button)
  // Add Class On Div

  document.body.appendChild(div)
}
document.addEventListener('click', s => {
  if (s.target.className === 'btn') {
    location.reload()
  }
})
function winning () {
  // Create Popup Div
  let div = document.createElement('div')

  // Create Text
  let divText = document.createTextNode(`Congratulation , you are winner`)

  // Append Text To Div
  div.appendChild(divText)

  // Add Class On Div
  div.className = 'popup2'

  // Append To The Body
  document.body.appendChild(div)
}
