// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, onThumbnailClicked} = props
  console.log(isActive)
  const active = isActive ? 'activeThumbnail' : 'thumbnail'
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails

  const onImage = () => {
    onThumbnailClicked(imageUrl, imageAltText)
  }
  return (
    <li>
      <button type="button" onClick={onImage} className="custom-btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} className={active} />
      </button>
    </li>
  )
}

export default ThumbnailItem
