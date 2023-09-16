import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar"

function ScollableGitHubContent(){

const gitData = [
  {id: '1', title: 'Tilt3D Single Player', price: '', language: 'JavaScript, HTML, CSS', css: 'main bg1', image: 'images/tilt3d2.png', libraries: 'ThreeJS, CannonES'},
  {id: '2', title: 'Tilt3D Multi Player', price: '', language: 'JavaScript, HTML, CSS', css: 'main bg2', image: 'images/tilt3dmulti1.png', libraries: 'ThreeJS, Cannon ES'},
  {id: '3', title: 'Uncha Software Part 1', price: '', language: 'Python', css: 'main bg3', image: 'images/uncha1.png', libraries: 'rembg, tkinter, threading, pillow, os'},
  {id: '4', title: 'Uncha Software Part 2', price: '', language: 'Python', css: 'main bg4', image: 'images/uncha2.png', libraries: 'rembg, tkinter, threading, pillow, os'},
  {id: '5', title: 'Uncha Software Part 3', price: '', language: 'Python', css: 'main bg5', image: 'images/uncha3.png', libraries: 'rembg, tkinter, threading, pillow, os'},
  {id: '6', title: 'Uncha Software Part 4', price: '', language: 'Python', css: 'main bg1', image: 'images/uncha4.png', libraries: 'rembg, tkinter, threading, pillow, os'},
  {id: '6', title: 'Uncha Software Part 5', price: '', language: 'Python', css: 'main bg2', image: 'images/uncha5.png', libraries: 'rembg, tkinter, threading, pillow, os'},
  {id: '6', title: 'Uncha Software Part 6', price: '', language: 'Python', css: 'main bg3', image: 'images/uncha6.png', libraries: 'rembg, tkinter, threading, pillow, os'},

]

const renderedGit = gitData.map((git) => {
  return(
    <>
      <div className='displayTiles dTGits'>
        <img src={git.image} alt=''/>
        <div className="responsiveFontSizing">
          <h1>{git.title}</h1>
          <h2>{git.language}</h2>
          <h2>{git.libraries}</h2>
        </div>
      </div>
    </>

  )
}) 


  return(
    <>
      <div id='github'></div>
      <NavigationBar title={'GitHub Projects - Open Source'}/>
      <HorizontalScroll>
      {renderedGit}
      </HorizontalScroll>   
    </>

  )

}

export default ScollableGitHubContent;