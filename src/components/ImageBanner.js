import "../App.css"

function ImageBanner({imagePath}){

  return(
    <div className='contentBanner'>
      <img src={imagePath} alt=''/>
    </div>
  )
}


export default ImageBanner;