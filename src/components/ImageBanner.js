function ImageBanner(props){

  return(
    <div className='contentBanner'>
      <img src={props.imagePath} alt=''/>
    </div>
  )
}


export default ImageBanner;