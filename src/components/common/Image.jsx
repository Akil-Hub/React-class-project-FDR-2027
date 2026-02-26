

const Image = ({imgSrc,altSrc}) => {
  return (
    <img src={imgSrc} alt={altSrc} className="bg-cover bg-center bg-no-repeat h-full w-full" />
  )
}

export default Image