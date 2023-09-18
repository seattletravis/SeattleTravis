import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar";
import React from "react";
import ImageBanner from "./ImageBanner";


function ScrollableVideoContent(){

  const videoData = [
    {id: '1', title: 'Uncha How-To Video', language: 'Python', 
    url: 'https://youtu.be/dWjS_NFd3d4?si=ObRqEPc5ZCKdSBQ9', image: 'images/unchaDemo.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '2', title: 'Uncha Coding Video 1', language: 'Python', 
    url: 'https://youtu.be/f338UE4B8T4', image: 'images/uncha1.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '3', title: 'Uncha Coding Video 2', language: 'Python', 
    url: 'https://youtu.be/MIAukamudl4', image: 'images/uncha2.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '4', title: 'Uncha Coding Video 3', language: 'Python', 
    url: 'https://youtu.be/-NNXTQBsa4g', image: 'images/uncha3.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '5', title: 'Uncha Coding Video 4', language: 'Python', 
    url: 'https://youtu.be/xK_40n2hVpg', image: 'images/uncha4.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '6', title: 'Uncha Coding Video 5', language: 'Python', 
    url: 'https://youtu.be/qfmpTftg2bY', image: 'images/uncha5.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '7', title: 'Uncha Coding Video 6', language: 'Python', 
    url: 'https://youtu.be/bzIbVodszLU', image: 'images/uncha6.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '8', title: 'Coral Reefs', language: 'Canva', 
    url: 'https://youtube.com/shorts/1gdZbdzJHCg', image: '', libraries: '',
    type: 'youtube short'},
    {id: '9', title: 'The Forbidden Island', language: 'Canva', 
    url: 'https://youtube.com/shorts/zJDUEZOoRGA', image: '', libraries: '',
    type: 'youtube short'},
    {id: '10', title: 'Niihau - The Forbidden Island', language: 'Canva', 
    url: 'https://youtube.com/shorts/UJgFID0MC3U', image: '', libraries: '',
    type: 'youtube short'},
    {id: '11', title: 'Maui Hawaii', language: 'Canva', 
    url: 'https://youtube.com/shorts/79PPl5sud4c', image: '', libraries: '',
    type: 'youtube short'},
    {id: '12', title: 'Hawaii Coffee', language: 'Canva', 
    url: 'https://youtube.com/shorts/24z7_2uhqlg', image: '', libraries: '',
    type: 'youtube short'},
    {id: '13', title: 'Hawaii Volcanoes', language: 'Canva', 
    url: 'https://youtube.com/shorts/o3XhkWfWZR4', image: '', libraries: '',
    type: 'youtube short'},
    {id: '14', title: 'Hawaii Treasure Island', language: 'Canva', 
    url: 'https://youtube.com/shorts/KFmkqGcH1Es', image: '', libraries: '',
    type: 'youtube short'},

  ]


  const displayVideoInfo = videoData.map((video) => {
    return (
      <React.Fragment key={video.id}>
        <div className='displayTiles dTVideos'>
          <img src={video.image} alt=''/>
          <div className="responsiveFontSizing">
            <div className="playButton">
                <a href={video.url}>WATCH NOW!</a>
              </div>
              <h1>{video.title}</h1>
              <h2>{video.language}</h2>
              <h2>{video.libraries}</h2>
            </div>
        </div>
      </React.Fragment>
    );
  });

  
  return(
    <>
      <div id="youtube"></div>
      <NavigationBar title={'Coding Videos & Youtube Shorts'}/>
      <ImageBanner imagePath={'images/youtubebanner.png'} />
      <HorizontalScroll>
      {displayVideoInfo}
      </HorizontalScroll> 
    </>
  )

}

export default ScrollableVideoContent;