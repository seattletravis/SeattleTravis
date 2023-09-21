import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar"
import React from "react"
import ImageBanner from "./ImageBanner"
import ScreenSmall from "../hooks/ScreenSmall"

function ScrollableTShirtContent(){

  const isSmall = ScreenSmall()

const shirtData = [
  {id: '1', title: 'Hawaii in Space', price: '', url: 'https://www.unclehawaii.com/listing/kihei-hawaii-astronaut-appar?product=369', 
  image: 'images/tees/spacekihei.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '2', title: 'Uncle Hawaii Specialty Beach Apparel', price: '', url: 'https://www.unclehawaii.com/listing/uncle-hawaii-specialty-beach-a?product=369', 
  image: 'images/tees/unclehawaii.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '3', title: 'Kapalua Hawaii - A Beach Paradise', price: '', url: 'https://www.unclehawaii.com/listing/hawaiian-state-fish-retro-beac?product=1303', 
  image: 'images/tees/humu.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '4', title: 'Kona Hawaii', price: '', url: 'https://www.unclehawaii.com/listing/uncle-hawaii-brand-specialty-a?product=369', 
  image: 'images/tees/kona.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '5', title: 'Maui Pineapple', price: '', url: 'https://www.unclehawaii.com/listing/maui-pineapple-tee-the-valle?product=1303', 
  image: 'images/tees/pineapplebeach.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '6', title: 'Turtle Town Maui', price: '', url: 'https://www.unclehawaii.com/listing/turtle-town-in-space-maui-ha?product=1303', 
  image: 'images/tees/turtletown.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '7', title: 'Finally a Ukulele Shirt', price: '', url: 'https://www.unclehawaii.com/listing/ukulele-beach-apparel?product=369', 
  image: 'images/tees/ukuleleshirt.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '8', title: 'Waikiki Sun', price: '', url: 'https://www.unclehawaii.com/listing/waikiki-sun-ocean-apparel?product=1303', 
  image: 'images/tees/waikikiretrosun.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '9', title: 'Kihei Nutrition Facts', price: '', url: 'https://www.unclehawaii.com/listing/get-your-daily-style-nourishme?product=1303', 
  image: 'images/tees/nutritionfacts.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '10', title: 'Hawaii Retro', price: '', url: 'https://www.unclehawaii.com/listing/hawaii-tee-2023?product=1303', 
  image: 'images/tees/hawaiiretro.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '11', title: 'Waikiki Retro', price: '', url: 'https://www.unclehawaii.com/listing/waikiki-retro-specialty-beach?product=1303', 
  image: 'images/tees/waikikibeach.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},
  {id: '12', title: 'Waikiki Sun', price: '', url: 'https://www.unclehawaii.com/listing/specialty-waikiki-beach-appare?product=1303', 
  image: 'images/tees/waikikiretro.png', variety: 'Assorted Sizes, Colors, & Styles Available!'},

]

const renderedTShirts = shirtData.map((shirt) => {
  return(
    <React.Fragment key={shirt.id}>
      <div className='displayTiles dTShirts'>
        <a href={shirt.url} target="blank">
          <img src={shirt.image} alt=''/>
        </a>
        <div className={isSmall ? "responsiveFontSizingSmallScreen" : "responsiveFontSizing"}>
          <div className={isSmall ? "hideButton" : ''}>
            <div className="playButton">
              <a href={shirt.url} target="blank">SHOP NOW!</a>
            </div>
          </div>
          <h1>{shirt.title}</h1>
          <h2>{shirt.variety}</h2>
        </div>
      </div>
    </React.Fragment>
  )
})


return(
  <>
  <div id="tshirts"></div>
  <NavigationBar title={'Apparel Store!'}/>
  <ImageBanner imagePath={'images/unclehawaiibanner.png'} />

  <HorizontalScroll>
    {renderedTShirts}
  </HorizontalScroll>
  </>
)
}

export default ScrollableTShirtContent;