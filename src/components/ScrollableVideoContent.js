import NavigationBar from "./NavigationBar";
import React from "react";
import ImageBanner from "./ImageBanner";
import useScreenSmall from "../hooks/useScreenSmall";
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'


function ScrollableVideoContent(){

const isSmall = useScreenSmall()

  const videoData = [
    
    {id: '6', title: 'Uncha Coding Video 5', language: 'Python', 
    url: 'https://youtu.be/qfmpTftg2bY', image: 'images/youtube/uncha5.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '8', title: 'Coral Reefs', language: 'Canva', 
    url: 'https://youtube.com/shorts/1gdZbdzJHCg', image: 'images/youtube/coral.png', libraries: '',
    type: 'youtube short'},
    {id: '2', title: 'Uncha Coding Video 1', language: 'Python', 
    url: 'https://youtu.be/f338UE4B8T4', image: 'images/youtube/uncha1.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '9', title: 'Niihau Hawaii', language: 'Canva', 
    url: 'https://youtube.com/shorts/zJDUEZOoRGA', image: 'images/youtube/forbidden.png', libraries: '',
    type: 'youtube short'},
    {id: '3', title: 'Uncha Coding Video 2', language: 'Python', 
    url: 'https://youtu.be/MIAukamudl4', image: 'images/youtube/uncha2.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '10', title: 'Maui Hawaii', language: 'Canva', 
    url: 'https://youtube.com/shorts/79PPl5sud4c', image: 'images/youtube/maui.png', libraries: '',
    type: 'youtube short'},
    {id: '4', title: 'Uncha Coding Video 3', language: 'Python', 
    url: 'https://youtu.be/-NNXTQBsa4g', image: 'images/youtube/uncha3.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '11', title: 'Hawaii Coffee', language: 'Canva', 
    url: 'https://youtube.com/shorts/24z7_2uhqlg', image: 'images/youtube/coffee.png', libraries: '',
    type: 'youtube short'},
    {id: '5', title: 'Uncha Coding Video 4', language: 'Python', 
    url: 'https://youtu.be/xK_40n2hVpg', image: 'images/youtube/uncha4.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '12', title: 'Hawaii Volcanoes', language: 'Canva', 
    url: 'https://youtube.com/shorts/o3XhkWfWZR4', image: 'images/youtube/volcanoes.png', libraries: '',
    type: 'youtube short'},
    {id: '7', title: 'Uncha Coding Video 6', language: 'Python', 
    url: 'https://youtu.be/bzIbVodszLU', image: 'images/youtube/uncha6.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},
    {id: '13', title: 'Hawaii Treasure Island', language: 'Canva', 
    url: 'https://youtube.com/shorts/KFmkqGcH1Es', image: 'images/youtube/kamehameha.png', libraries: '',
    type: 'youtube short'},
    {id: '1', title: 'Uncha How-To Video', language: 'Python', 
    url: 'https://youtu.be/dWjS_NFd3d4?si=ObRqEPc5ZCKdSBQ9', image: 'images/youtube/unchademo.png', libraries: 'rembg, tkinter, pillow, threading, os',
    type: 'video'},

  ]

  const displayVideoInfo = videoData.map((video) => {
    return (
      <React.Fragment key={video.id}>
        <div className='displayTiles dTVideos'>
          <a href={video.url} target="blank">
            <img src={video.image} alt=''/>
          </a>
          <div className={isSmall ? "responsiveFontSizingSmallScreen" : "responsiveFontSizing"}>
            <div className={isSmall ? "hideButton" : ''}>
              <div className="playButton">
                <a href={video.url} target="blank">WATCH NOW!</a>
              </div>
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
    <NavigationBar title={'Coding & Design Videos'}/>
    <ImageBanner imagePath={'images/youtubebanner.png'} />
    <ScrollMenu className="scrollMenu" LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {displayVideoInfo}
    </ScrollMenu>
    </>
  )

}

export default ScrollableVideoContent;