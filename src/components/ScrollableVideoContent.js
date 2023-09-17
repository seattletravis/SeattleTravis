import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar";
import React from "react";

function ScrollableVideoContent(){

  const videoData = [
    {id: '1', title: 'Uncha How-To Video', language: 'Python', 
    url: 'https://youtu.be/dWjS_NFd3d4?si=ObRqEPc5ZCKdSBQ9', image: 'images/unchaDemo.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '2', title: 'Uncha Coding Video 1', language: 'Python', 
    url: '', image: 'images/uncha1.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '3', title: 'Uncha Coding Video 2', language: 'Python', 
    url: '', image: 'images/uncha2.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '4', title: 'Uncha Coding Video 3', language: 'Python', 
    url: '', image: 'images/uncha3.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '5', title: 'Uncha Coding Video 4', language: 'Python', 
    url: '', image: 'images/uncha4.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '6', title: 'Uncha Coding Video 5', language: 'Python', 
    url: '', image: 'images/uncha5.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '7', title: 'Uncha Coding Video 6', language: 'Python', 
    url: '', image: 'images/uncha6.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '8', title: 'Coral Reefs', language: 'Canva', 
    url: '', image: '', libraries: '',
    type: 'youtube short'},
    {id: '9', title: 'The Forbidden Island', language: 'Canva', 
    url: '', image: '', libraries: '',
    type: 'youtube short'},
    {id: '10', title: 'Niihau - The Forbidden Island', language: 'Canva', 
    url: '', image: '', libraries: '',
    type: 'youtube short'},
  ]


  const displayVideoInfo = videoData.map((video) => {
    return (
      <React.Fragment key={video.id}>
        <div className='displayTiles dTVideos'>
          <img src={video.image} alt=''/>
          <div className="responsiveFontSizing">
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
      <HorizontalScroll>
      {displayVideoInfo}
      </HorizontalScroll> 
    </>
  )

}

export default ScrollableVideoContent;