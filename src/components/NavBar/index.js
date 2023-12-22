import './index.css'

const NavbarItem = props => (
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
        <p className="EmojiNavbarPara">Score: 0</p>
        <p className="EmojiNavbarPara">Top Score: 0</p>
      </div>
    </div>
  </div>
)
export default NavbarItem
