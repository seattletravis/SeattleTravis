import HorizontalScroll from "react-scroll-horizontal"
import NavigationBar from "./NavigationBar"
import React from "react"
import ImageBanner from "./ImageBanner"
import { useState } from "react"

function ScollableGitHubContent(){

const [isSmall, setIsSmall] = useState(window.innerWidth<1200)
React.useEffect(() => {
  function handleResize() {
    setIsSmall(window.innerWidth<1200)
}
  window.addEventListener('resize', handleResize)
})

const gitData = [
  {id: '1', title: 'LamberteDesign.com', language: 'React, JavaScript, CSS', image: 'images/lambertedesign.png', libraries: '', url: 'https://github.com/seattletravis/LamberteDesign.git'},
  {id: '2', title: 'Tilt3D Single Player', language: 'JavaScript, HTML, CSS', image: 'images/tilt3d2.png', libraries: 'ThreeJS, CannonES', url: 'https://github.com/seattletravis/Tilt3DSinglePlayer.git'},
  {id: '3', title: 'Tilt3D Multi Player', language: 'JavaScript, HTML, CSS', image: 'images/tilt3dmulti1.png', libraries: 'ThreeJS, Cannon ES', url: 'https://github.com/seattletravis/Tilt3DMultiPlayer.git'},
  {id: '4', title: 'Uncha Software Part 1', language: 'Python', image: 'images/uncha1.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_1.git'},
  {id: '5', title: 'Uncha Software Part 2', language: 'Python', image: 'images/uncha2.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_2.git'},
  {id: '6', title: 'Uncha Software Part 3', language: 'Python', image: 'images/uncha3.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_3.git'},
  {id: '7', title: 'Uncha Software Part 4', language: 'Python', image: 'images/uncha4.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_4.git'},
  {id: '8', title: 'Uncha Software Part 5', language: 'Python', image: 'images/uncha5.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_5.git'},
  {id: '9', title: 'Uncha Software Part 6', language: 'Python', image: 'images/uncha6.png', libraries: 'rembg, tkinter, threading, pillow, os', url: 'https://github.com/seattletravis/bg_remover_Part_6.git'},

]

const renderedGit = gitData.map((git) => {
  return(
    <React.Fragment key={git.id}>
      <div className='displayTiles'>
      <a href={git.url}>
        <img src={git.image} alt=''/>
      </a>
        <div className={isSmall ? "responsiveFontSizingSmallScreen" : "responsiveFontSizing"}>
          <div className="playButton">
            <a href={git.url}>CODE NOW!</a>
          </div>
          <h1>{git.title}</h1>
          <h2>{git.language}</h2>
          <h2>{git.libraries}</h2>
        </div>
      </div>
    </React.Fragment>

  )
}) 


  return(
    <>
      <div id='github'></div>
      <NavigationBar title={'GitHub Projects - Open Source'}/>
      <ImageBanner imagePath={'images/githubbanner.png'} />
      <HorizontalScroll>
      {renderedGit}
      </HorizontalScroll>   
    </>

  )

}

export default ScollableGitHubContent;