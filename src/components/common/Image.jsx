

const Image = ({imgSrc,altSrc}) => {
  return (
    <img src={imgSrc} alt={altSrc} className="bg-cover bg-center bg-no-repeat" />
  )
}

export default Image