/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import NavbarItem from '../NavBar'

import './index.css'

import EachEmojiCard from '../EmojiCard'

const initialEmojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emojisList: initialEmojisList,
    standardList: initialEmojisList,
    emojiClicked: [],
  }

  emojiClicked = id => {
    console.log(id)
    const {emojisList, emojiClicked, standardList} = this.state
    const isEmojiClicked = emojiClicked.includes(
      emojiClicked.find(eachItem => eachItem.id === id),
    )
    if (isEmojiClicked === true) {
      console.log('You lost the game')
    } else {
      console.log('Continue')
      const item = standardList.find(each => each.id === id)
      console.log(item)
      this.setState(prevState => ({
        emojiClicked: [...prevState.emojiClicked, item],
      }))
      console.log(emojiClicked)
    }

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledEmojisList()})
  }

  render() {
    const {emojisList} = this.state
    return (
      <div className="MainContainer">
        <NavbarItem />
        <div className="cardsContainer">
          <ul className="UnorderedList">
            {emojisList.map(eachItem => (
              <EachEmojiCard
                item={eachItem}
                key={eachItem.id}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
