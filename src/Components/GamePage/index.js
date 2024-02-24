import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import EachButtonCard from '../EachButtonCard'
import {
  GameCard,
  ImageCard,
  Heading,
  RulesCard,
  Paragraph,
} from './StyledComponents'

class GamePage extends Component {
  state = {
    computerInput: '',
    userInput: '',
    winOrLoseCardShoe: true,
    score: 0,
  }

  winOrLose = () => {
    const {computerInput, userInput} = this.state

    if (userInput === computerInput) {
      return 'IT IS DRAW'
    }

    if (
      (userInput === 'ROCK' && computerInput === 'SCISSORS') ||
      (userInput === 'PAPER' && computerInput === 'ROCK') ||
      (userInput === 'SCISSORS' && computerInput === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  userClickedThisButton = id => {
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        userInput: id,
        computerInput: choicesList[randomIndex].id,
        winOrLoseCardShoe: false,
      },
      () => {
        const winCard = this.winOrLose()
        this.getingScore(winCard)
      },
    )
  }

  playAgainButtonIsClicked = () => {
    this.setState({
      userInput: '',
      computerInput: '',
      winOrLoseCardShoe: true,
    })
  }

  getingScore = winCard => {
    switch (winCard) {
      case 'YOU LOSE':
        this.setState(prevState => ({score: prevState.score - 1}))
        break
      case 'YOU WON':
        this.setState(prevState => ({score: prevState.score + 1}))
        break
      default:
        break
    }
  }

  render() {
    const {choicesList} = this.props
    const {userInput, computerInput, winOrLoseCardShoe, score} = this.state
    const userImageFile = choicesList.find(
      eachItem => eachItem.id === userInput,
    )
    const opponentFile = choicesList.find(
      eachItem => eachItem.id === computerInput,
    )
    const winCard = this.winOrLose()

    return (
      <>
        <Header score={score} />
        {winOrLoseCardShoe ? (
          <GameCard>
            {choicesList.map(eachItem => (
              <EachButtonCard
                eachItem={eachItem}
                key={eachItem.id}
                userClickedThisButton={this.userClickedThisButton}
              />
            ))}
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                      label="closeIngTheRules"
                    >
                      <RiCloseLine />
                    </button>
                    <div>
                      <ImageCard
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </GameCard>
        ) : (
          <GameCard>
            <>
              <div>
                <Heading>You</Heading>
                <ImageCard src={userImageFile.imageUrl} alt="your choice" />
              </div>
              <div>
                <Heading>opponent</Heading>
                <ImageCard src={opponentFile.imageUrl} alt="opponent choice" />
              </div>
            </>
            <div>
              <RulesCard onClick={this.playAgainButtonIsClicked}>
                PLAY AGAIN
              </RulesCard>
            </div>
            <Paragraph>{winCard}</Paragraph>
          </GameCard>
        )}
      </>
    )
  }
}

export default GamePage
