import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import ContentBanner from './components/ContentBanner';
import SpacerBar from './components/SpacerBar';


function App() {

  return (
    <div>
      <div className='background' id='home'>
        <div className="App">
          <NavigationBar title={"LamberteDesign"}/>
          <ContentBanner imagePath={'images/seattle.jpg'} />
          <SpacerBar />
        </div>
      </div>

      <div className='scrollBlock'>
        <ScrollableGameContent />
        <SpacerBar />
        <ContentBanner imagePath={'images/gamesbar.png'}/>
        <ScrollableVideoContent />
        <SpacerBar />

        <ContentBanner imagePath={'images/gamesbar.png'}/>

        <ScollableGitHubContent />
        <SpacerBar />

        <ContentBanner imagePath={'images/gamesbar.png'}/>

        <SpacerBar />
        <ScrollableTShirtContent />
        <ContentBanner imagePath={'images/gamesbar.png'}/>

      </div>
 
    </div>
  );
}

export default App;
