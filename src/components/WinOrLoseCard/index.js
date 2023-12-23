import './index.css'

const Win = props => {
  const {startGame} = props
  const playAgain = () => {
    startGame()
  }
  return (
    <div className="ResultContainer">
      <div className="result">
        <h1 className="resultHeading">You Won</h1>
        <p className="resultPara">Best Score</p>
        <p className="resultPara1">12/12</p>
        <button
          className="playAgainButton"
          type="button"
          onClick={playAgain}
          data-testid="delete"
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="resultImg"
      />
    </div>
  )
}

const Loose = props => {
  const {startGame, scoreCard} = props
  const playAgain = () => {
    startGame()
  }
  return (
    <div className="ResultContainer">
      <div className="result">
        <h1 className="resultHeading">You Lose</h1>
        <p className="resultPara"> Score</p>
        <p className="resultPara1">{scoreCard}/12</p>
        <button
          className="playAgainButton"
          type="button"
          onClick={playAgain}
          data-testid="delete"
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="resultImg"
      />
    </div>
  )
}

export {Win, Loose}
