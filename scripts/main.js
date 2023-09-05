const initialScore = {
  win: 0,
  tie: 0,
  lose: 0,
}

function initScore() {
  let initScore = localStorage.getItem("@rockPaperScissorsResult")

  if (initScore) {
    return JSON.parse(initScore)
  }

  return initialScore
}

let score = {
  ...initScore(),
}

function pickComputerMove() {
  const randomNumber = Math.random()

  let computerMove
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock"
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper"
  } else {
    computerMove = "Scissors"
  }

  return computerMove
}

function rockPaperScissors(userMove) {
  let winText = "You win."
  let tieText = "Tie."
  let loseText = "You lose."

  let result

  let computerMove = pickComputerMove()

  if (userMove === "Rock") {
    if (computerMove === "Rock") {
      result = tieText
      score.tie++
    } else if (computerMove === "Scissors") {
      score.win++
      result = winText
    } else {
      result = loseText
      score.lose++
    }
  } else if (userMove === "Paper") {
    if (computerMove === "Paper") {
      result = tieText
      score.tie++
    } else if (computerMove === "Rock") {
      result = winText
      score.win++
    } else {
      result = loseText
      score.lose++
    }
  } else if (userMove === "Scissors") {
    if (computerMove === "Scissors") {
      result = tieText
      score.tie++
    } else if (computerMove === "Paper") {
      result = winText
      score.win++
    } else {
      result = loseText
      score.lose++
    }
  }

  localStorage.setItem("@rockPaperScissorsResult", JSON.stringify(score))
  updateScore()
  showGame(userMove, computerMove)
}

function resetScore() {
  score = { ...initialScore }
  localStorage.removeItem("@rockPaperScissorsResult")
  updateScore()
  resetGame()
}

function updateScore() {
  document.getElementById(
    "result"
  ).innerText = `Wins: ${score.win}; Losses: ${score.lose}; Ties: ${score.tie};`
}

function showGame(userSelected, computerSelected) {
  document.getElementById(
    "game"
  ).innerText = `User selected ${userSelected}. Computer selected ${computerSelected}.`
}

function resetGame() {
  document.getElementById("game").innerText = ""
}

updateScore()
