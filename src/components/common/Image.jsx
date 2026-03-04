

const Image = ({imgSrc,altSrc,className}) => {
  return (
    <img src={imgSrc} alt={altSrc} className={`bg-cover bg-center bg-no-repeat h-full w-full ${className}`} />
  )
}

export default Image