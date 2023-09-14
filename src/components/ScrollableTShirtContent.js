import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar"

function ScrollableTShirtContent(){

const shirtData = [
  {id: '1', title: 'Listing 1', price: '19.99', url: '', css: 'main bg1', image: ''},
  {id: '2', title: 'Listing 2', price: '19.99', url: '', css: 'main bg2', image: ''},
  {id: '3', title: 'Listing 3', price: '19.99', url: '', css: 'main bg3', image: ''},
  {id: '4', title: 'Listing 4', price: '19.99', url: '', css: 'main bg4', image: ''},
  {id: '5', title: 'Listing 5', price: '19.99', url: '', css: 'main bg5', image: ''},
  {id: '6', title: 'Listing 6', price: '19.99', url: '', css: 'main bg6', image: ''},
]

const renderedTShirts = shirtData.map((shirt) => {
  return(
    <div className='tile-padding'>
    <div className={shirt.css}>
      <h1>{shirt.title}</h1>
    </div>
  </div>
  )
})


return(
  <>
  <h1 className='scroll-header' id='tshirts'>Uncle Hawaii Beach Apparel - Shop & Save!!!</h1>
  <NavigationBar />
  <HorizontalScroll>
    {renderedTShirts}
  </HorizontalScroll>
  </>
)
}

export default ScrollableTShirtContent;