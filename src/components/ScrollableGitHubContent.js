import HorizontalScroll from "react-scroll-horizontal"


function ScollableGitHubContent(){

const gitData = [
  {id: '1', title: 'Tilt3D Single Player', price: '', url: '', css: 'main bg1', image: ''},
  {id: '2', title: 'Tilt3D Multi Player', price: '', url: '', css: 'main bg2', image: ''},
  {id: '3', title: 'Uncha Software Part 1', price: '', url: '', css: 'main bg3', image: ''},
  {id: '4', title: 'Uncha Software Part 2', price: '', url: '', css: 'main bg4', image: ''},
  {id: '5', title: 'Uncha Software Part 3', price: '', url: '', css: 'main bg5', image: ''},
  {id: '6', title: 'Uncha Software Part 4', price: '', url: '', css: 'main bg1', image: ''},
  {id: '6', title: 'Uncha Software Part 5', price: '', url: '', css: 'main bg2', image: ''},
  {id: '6', title: 'Uncha Software Part 6', price: '', url: '', css: 'main bg3', image: ''},

]

const renderedGit = gitData.map((git) => {
  return(
    <div className='tile-padding'>
    <div className={git.css}>
      <h1>{git.title}</h1>
    </div>
  </div>
  )
}) 


return(
<>
<h1 className='scroll-header' id='github'>GitHub Portfolio</h1>
<HorizontalScroll>
{renderedGit}
</HorizontalScroll>   
</>

)



}

export default ScollableGitHubContent;