import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import ContentBanner from './components/ContentBanner';


function App() {

  return (
    <div>
      <div className='background' id='home'>
        <div className="App">
          <NavigationBar title={"LamberteDesign"}/>
          <ContentBanner imagePath={'images/seattle.jpg'} />
        </div>
      </div>

      <div className='scrolldivs'>


        <ScrollableGameContent />
        <ContentBanner imagePath={'images/gamesbar.png'}/>
        <ScrollableVideoContent />
        <ContentBanner imagePath={'images/gamesbar.png'}/>

        <ScollableGitHubContent />
        <ContentBanner imagePath={'images/gamesbar.png'}/>

        <ScrollableTShirtContent />
        <ContentBanner imagePath={'images/gamesbar.png'}/>

      </div>
 
    </div>
  );
}

export default App;
