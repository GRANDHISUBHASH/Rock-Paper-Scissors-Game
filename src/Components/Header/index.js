import {MainCard, Heading, Paragraph} from './StyledComponents'

const Header = props => {
  const {score} = props
  return (
    <MainCard>
      <Heading>Rock Paper Scissors</Heading>

      <div>
        <Paragraph>Score</Paragraph>
        <Paragraph>{score}</Paragraph>
      </div>
    </MainCard>
  )
}
export default Header
