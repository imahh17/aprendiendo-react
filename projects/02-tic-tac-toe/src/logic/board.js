import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    //Revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&       
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //Si no hay ganador, nada
    return null
}

export const checkEndGame = (newBoard) => {
    //Revisa si newBoard está completo -> CheckEndGame devolvería true
    return newBoard.every((square) => square != null);
}