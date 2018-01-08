/*
Minimal UI that redraws the board and makes clear whose turn it is, each turn.
Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
Win detection - detect and display who won
*/

const drawBoard = (player) => {
  const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  console.log(`
     ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
    -----------
     ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
    -----------
     ${board[2][0]} | ${board[2][1]} | ${board[2][2]}

${player}, you are 'X'. Please decide where to place your piece by entering the area's number
  `)
}

class Player {
  constructor(name, shape) {
    this.name = name
    this.shape = shape
  }

  makeMove(space) {
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }
}

const player1 = new Player('poo', 'X')
const player2 = new Player('foo', 'O')

new Game(player1, player);
