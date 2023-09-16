import HorizontalScroll from "react-scroll-horizontal";
import NavigationBar from "./NavigationBar";


function ScrollableGameContent(){

  const gameData = [
    {id: '1', title: 'Tilt3D Single Player', language: 'JavaScript, HTML, CSS', 
    url: 'addlater.com', image: 'images/tilt3d2.png', libraries: 'ThreeJS, CannonES'},
    {id: '2', title: 'Tilt3D Multi Player', language: 'JavaScript', 
    url: '', image: 'images/tilt3dmulti1.png', libraries: 'ThreeJS, CannonES'},
    {id: '3', title: 'Bubble Gum Game', language: 'JavaScript', 
    url: '', image: 'images/bubblegum4.png', libraries: ''},
    {id: '4', title: "Beemo's Date & Time Page", language: 'JavaScript', 
    url: '', image: 'images/beemo2.png', libraries: ''},
    {id: '5', title: "Orbits", language: 'JavaScript', 
    url: '', image: 'images/orbits1.png', libraries: ''},
    {id: '6', title: "90's Throwback", language: 'JavaScript', 
    url: '', image: 'images/throwback1.png', libraries: ''},
    {id: '7', title: 'Tetrominos', language: 'JavaScript', 
    url: '', image: 'images/tetro1.png', libraries: ''},
    

  ]

  const renderedGames = gameData.map((game) => {
    return (
      <>
        <div className='displayTiles'>
          <img src={game.image} alt=''/>
          <div className="responsiveFontSizing">
            <h1>{game.title}</h1>
            <h2>{game.language}</h2>
            <h2>{game.libraries}</h2>
          </div>
        </div>
      </>
    );
  });

  
  return(
    <>
      <div id="games"></div>
      <NavigationBar title={'Games & Web Applications'}/>
      <HorizontalScroll>
          {renderedGames}
      </HorizontalScroll> 

    </>
  )

}

export default ScrollableGameContent;