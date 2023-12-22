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
        <button className="playAgainButton" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="result"
        className="resultImg"
      />
    </div>
  )
}

const Loose = props => {
  const {startGame, scoreCard} = props
  console.log(scoreCard)
  const playAgain = () => {
    startGame()
  }
  return (
    <div className="ResultContainer">
      <div className="result">
        <h1 className="resultHeading">You Loose</h1>
        <p className="resultPara"> Score</p>
        <p className="resultPara1">{scoreCard}/12</p>
        <button className="playAgainButton" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="result"
        className="resultImg"
      />
    </div>
  )
}

export {Win, Loose}
