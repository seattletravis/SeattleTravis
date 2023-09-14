import HorizontalScroll from "react-scroll-horizontal";
import NavigationBar from "./NavigationBar";
import tilt3d2 from "../images/tilt3d2.png";

function ScrollableGameContent(){

  const gameData = [
    {id: '1', title: 'Tilt3D Single Player', language: 'JavaScript', 
    url: 'addlater.com', image: tilt3d2, css: 'gamedisplaytiles'},
    {id: '2', title: 'Tilt3D Multi Player', language: 'JavaScript', 
    url: '', image: tilt3d2, css: 'gamedisplaytiles'},
    {id: '3', title: "Beemo's Date & Time Page", language: 'JavaScript', 
    url: '', image: tilt3d2, css: 'gamedisplaytiles'},
    {id: '4', title: "Orbits", language: 'JavaScript', 
    url: '', image: tilt3d2, css: 'gamedisplaytiles'},
    {id: '5', title: "90's Throwback", language: 'JavaScript', 
    url: '', image: tilt3d2, css: 'gamedisplaytiles'},
    {id: '6', title: 'Tetrominos', language: 'JavaScript', 
    url: '', image: tilt3d2, css: 'gamedisplaytiles'},
    

  ]

  const renderedGames = gameData.map((game) => {
    return (
      <>
        {/* <div className='tile-padding'> */}
          <div className='gamedisplaytiles'>
            <img src={game.image} alt=''/>
            <h1>{game.title}</h1>
          </div>
        {/* </div> */}
      </>

    );
  });

  
  return(
    <>
      <h1 className='scroll-header' id='games'>Games & Web Applications</h1>
      <NavigationBar />
      <HorizontalScroll>
      {renderedGames}
      </HorizontalScroll> 

    </>
  )

}

export default ScrollableGameContent;