import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar"
import React from "react"

function ScrollableTShirtContent(){

const shirtData = [
  {id: '1', title: 'Hawaii in Space', price: '19.99', url: 'https://www.unclehawaii.com/listing/kihei-hawaii-astronaut-appar?product=369', 
  image: 'images/tees/spacekihei.png'},
  {id: '2', title: 'Uncle Hawaii Specialty Beach Apparel', price: '19.99', url: '', 
  image: 'images/tees/unclehawaii.png'},
  {id: '3', title: 'Kapalua Hawaii - A Beach Paradise', price: '19.99', url: '', 
  image: 'images/tees/humu.png'},
  {id: '4', title: 'Kona Hawaii', price: '19.99', url: '', 
  image: 'images/tees/kona.png'},
  {id: '5', title: 'Maui Pineapple', price: '19.99', url: '', 
  image: 'images/tees/pineapplebeach.png'},
  {id: '6', title: 'Turtle Town Maui', price: '19.99', url: '', 
  image: 'images/tees/turtletown.png'},
  {id: '7', title: 'Finally a Ukulele Shirt', price: '19.99', url: '', 
  image: 'images/tees/ukuleleshirt.png'},
  {id: '8', title: 'Waikiki Sun', price: '19.99', url: '', 
  image: 'images/tees/waikikiretrosun.png'},
  {id: '9', title: 'Kihei Nutrition Facts', price: '19.99', url: '', 
  image: 'images/tees/nutritionfacts.png'},
  {id: '10', title: 'Hawaii Retro', price: '19.99', url: '', 
  image: 'images/tees/hawaiiretro.png'},
  {id: '11', title: 'Waikiki Retro', price: '19.99', url: '', 
  image: 'images/tees/waikikibeach.png'},
  {id: '12', title: 'Waikiki Sun', price: '19.99', url: '', 
  image: 'images/tees/waikikiretro.png'},

]

const renderedTShirts = shirtData.map((shirt) => {
  return(
    <React.Fragment key={shirt.id}>
      <div className='displayTiles dTShirts'>
        <img src={shirt.image} alt=''/>
        <div className="responsiveFontSizing">
          <div className="playButton">
            <a href={shirt.url}>PLAY NOW!</a>
          </div>
          <h1>{shirt.title}</h1>
          <h2>from ${shirt.price}</h2>
        </div>
      </div>
    </React.Fragment>
  )
})


return(
  <>
  <div id="tshirts"></div>
  <NavigationBar title={'Uncle Hawaii Specialty Beach Apparel - Shop & Save!'}/>
  <HorizontalScroll>
    {renderedTShirts}
  </HorizontalScroll>
  </>
)
}

export default ScrollableTShirtContent;