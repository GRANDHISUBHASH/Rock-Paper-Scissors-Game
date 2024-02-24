import {Component} from 'react'

import GamePage from './Components/GamePage'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
console.log(choicesList)
class App extends Component {
  render() {
    return (
      <div>
        <GamePage choicesList={choicesList} />
      </div>
    )
  }
}

export default App
