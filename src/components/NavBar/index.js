import './index.css'

const NavbarItem = props => {
  const {item} = props
  const {SCORE, TOPSCORE} = item
  return (
    <div className="navbarContainer">
      <div className="insideNavBarContainer">
        <div className="navbarInsideContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logoImg"
          />
          <p className="emojiLogoPara">Emoji Game</p>
        </div>
        <div className="navbarInsideContainer">
          <p className="EmojiNavbarPara">Score: {SCORE}</p>
          <p className="EmojiNavbarPara">Top Score: {TOPSCORE}</p>
        </div>
      </div>
    </div>
  )
}

export default NavbarItem
