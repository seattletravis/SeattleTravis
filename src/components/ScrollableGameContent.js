import HorizontalScroll from "react-scroll-horizontal";
import NavigationBar from "./NavigationBar";
import React from "react";
import ImageBanner from "./ImageBanner";
import { useState } from "react";

function ScrollableGameContent(){

  const [isSmall, setIsSmall] = useState(window.innerWidth<1200)

  React.useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth<1200)
}
    window.addEventListener('resize', handleResize)
  })


  const gameData = [
    {id: '1', title: 'Tilt3D Single Player', language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/tilt3dSinglePlayer/index.html', image: 'images/tilt3d2.png', libraries: 'ThreeJS, CannonES'},
    {id: '2', title: 'Tilt3D Multi Player', language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/tilt3dMultiPlayer/index.html', image: 'images/tilt3dmulti1.png', libraries: 'ThreeJS, CannonES'},
    {id: '3', title: 'Bubble Gum Game', language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/bubbleGum/index.html', image: 'images/bubblegum4.png', libraries: 'ThreeJS'},
    {id: '4', title: "Beemo's Date & Time Page", language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/clock/index.html', image: 'images/beemo2.png', libraries: ''},
    {id: '5', title: "Orbits", language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/orbit/index.html', image: 'images/orbits1.png', libraries: ''},
    {id: '6', title: "90's Throwback", language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/throwback90s/index.html', image: 'images/throwback1.png', libraries: ''},
    {id: '7', title: 'Tetrominos', language: 'JavaScript, HTML, CSS', 
    url: 'https://travis.lamberte.com/tetromino/index.html', image: 'images/tetro1.png', libraries: ''},
    

  ]

  const renderedGames = gameData.map((game) => {
    return (
      <React.Fragment key={game.id}>
        <div className='displayTiles dTGames'>
        <a href={game.url} target="blank">
          <img src={game.image} alt=''/>
        </a>

          {/* <img src={game.image} alt=''/> */}
          <div className={isSmall ? "responsiveFontSizingSmallScreen" : "responsiveFontSizing"}>
            <div className="playButton">
              <a href={game.url} target="blank">PLAY NOW!</a>
            </div>
            <h1>{game.title}</h1>
            <h2>{game.language}</h2>
            <h2>{game.libraries}</h2>
          </div>
        </div>
      </React.Fragment>
    );
  });

  
  return(
    <>
      <div id="games"></div>
      <NavigationBar title={'Web Apps & Games'}/>
      <ImageBanner imagePath={'images/gamesbanner3.png'} />
      <HorizontalScroll className="horzo">
          {renderedGames}
      </HorizontalScroll> 

    </>
  )

}

export default ScrollableGameContent;