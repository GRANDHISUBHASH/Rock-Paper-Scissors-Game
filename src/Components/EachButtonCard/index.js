import {EachImageCard, ImageCard} from './StyledComponents'

const EachButtonCard = props => {
  const {eachItem, userClickedThisButton} = props
  const {id, imageUrl} = eachItem

  const ButtonIsClicked = () => {
    userClickedThisButton(id)
  }
  return (
    <EachImageCard
      onClick={ButtonIsClicked}
      data-testid={`${id.toLowerCase()}Button`}
    >
      <ImageCard src={imageUrl} alt={id} />
    </EachImageCard>
  )
}
export default EachButtonCard
