import './App.css';
import { Link } from 'react-scroll';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import image from "./images/seattle.jpg";


function App() {

const menuItems = [
  {id: 1, title: 'games'},
  {id: 2, title: 'youtube'},
  {id: 3, title: 'github'},
  {id: 4, title: 'tshirts'},
]

return (

  <div className='background'>
    <div className="App">
      <nav>
        <h2 className='lamberteDesign'>LamberteDesign</h2>
        <ul>
          {menuItems.map(menu => (
            <li>
              <Link to={menu.title} smooth={true} offset={0} duration={2000}>{menu.title}</Link>
            </li>
          ))}      
        </ul>
      </nav>


      <div className='seattleimage'>
        <img src={image} alt=''/>
      </div>



  

      <ScrollableGameContent />
      <ScrollableVideoContent />
      <ScollableGitHubContent />
      <ScrollableTShirtContent />
      </div>
    </div>
  );
}

export default App;
