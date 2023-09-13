import HorizontalScroll from "react-scroll-horizontal"

function ScrollableGameContent(){

  const gameData = [
    {id: '1', title: 'Tilt3D Single Player', language: 'JavaScript', 
    url: 'addlater.com', image: 'addlater.png', css: 'main bg1'},
    {id: '2', title: 'Tilt3D Multi Player', language: 'JavaScript', 
    url: '', image: '', css: 'main bg2'},
    {id: '3', title: "Beemo's Date & Time Page", language: 'JavaScript', 
    url: '', image: '', css: 'main bg3'},
    {id: '4', title: "90's Throwback", language: 'JavaScript', 
    url: '', image: '', css: 'main bg4'},
    {id: '5', title: 'Tetrominos', language: 'JavaScript', 
    url: '', image: '', css: 'main bg5'},
  ]

  const renderedGames = gameData.map((game) => {
    return (
      <div className='tile-padding'>
        <div className={game.css}>
          <h1>{game.title}</h1>
        </div>
      </div>
    );
  });

  
  return(
    <>
      <h1 className='scroll-header' id='games'>Games & Web Applications</h1>
      <HorizontalScroll>
      {renderedGames}
      </HorizontalScroll> 

    </>
  )

}

export default ScrollableGameContent;