import HorizontalScroll from "react-scroll-horizontal"

function ScrollableVideoContent(){

  const videoData = [
    {id: '1', title: 'Uncha How-To Video', language: 'Python', 
    url: 'https://youtu.be/dWjS_NFd3d4?si=ObRqEPc5ZCKdSBQ9', image: 'addlater.png', css: 'main bg1',
    type: 'video'},
    {id: '2', title: 'Uncha Coding Video 1', language: 'Python', 
    url: '', image: '', css: 'main bg2',
    type: 'video'},
    {id: '3', title: 'Uncha Coding Video 2', language: 'Python', 
    url: '', image: '', css: 'main bg3',
    type: 'video'},
    {id: '4', title: 'Uncha Coding Video 3', language: 'Python', 
    url: '', image: '', css: 'main bg4',
    type: 'video'},
    {id: '5', title: 'Uncha Coding Video 4', language: 'Python', 
    url: '', image: '', css: 'main bg5',
    type: 'video'},
    {id: '6', title: 'Uncha Coding Video 5', language: 'Python', 
    url: '', image: '', css: 'main bg1',
    type: 'video'},
    {id: '7', title: 'Uncha Coding Video 6', language: 'Python', 
    url: '', image: '', css: 'main bg2',
    type: 'video'},
    {id: '8', title: 'Coral Reefs', language: 'Canva', 
    url: '', image: '', css: 'main bg5',
    type: 'youtube short'},
    {id: '9', title: 'The Forbidden Island', language: 'Canva', 
    url: '', image: '', css: 'main bg4',
    type: 'youtube short'},
    {id: '10', title: 'Niihau - The Forbidden Island', language: 'Canva', 
    url: '', image: '', css: 'main bg3',
    type: 'youtube short'},
  ]


  const displayVideoInfo = videoData.map((video) => {
    return (
      <div className='tile-padding'>
        <div className={video.css}>
          <h1>{video.title}</h1>
        </div>
      </div>
    );
  });

  
  return(
    <>
      <h1 className='scroll-header' id='youtube'>Coding Videos & Youtube Shorts</h1>
      <HorizontalScroll>
      {displayVideoInfo}
      </HorizontalScroll> 
    </>
  )

}

export default ScrollableVideoContent;