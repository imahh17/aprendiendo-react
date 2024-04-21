import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    //Si tenemos un board guardado en la memoria localStorage,
    //nos muestra la partida guardada, si no de partida de cero.
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    //Borramos el storage ya que la partida ha terminado
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }  

  const updateBoard = (index) => {
    //No actualizamos esta posición
    //si ya tiene algo, así no sobrescribe la posición
    if(board[index] || winner) return;
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar aquí la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      //si checkEndGame es true
      //significa que ha llegado el final del juego
      //pero no hay ganador => Empate
      setWinner(false)
    }
  }

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }

        </section>
        <section className="turn">
          <Square
            isSelected={turn === TURNS.X}
          >
            {TURNS.X}
          </Square>
          <Square
            isSelected={turn === TURNS.O}
          >
              {TURNS.O}
          </Square>
        </section>

        <WinnerModal
          winner={winner}
          resetGame={resetGame}
        />
      </main>
    </>
  )
}

export default App
