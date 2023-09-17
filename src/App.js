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
          <ContentBanner imagePath={'images/seattlebanner.png'} />
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
        <NavigationBar title={"Lets Play BubbleGum!"} /> 
        <ContentBanner imagePath={'images/gamesbar.png'}/>
        <iframe className="iframe" title="Hello World" src='https://travis.lamberte.com/bubbleGum/index.html' />

        <NavigationBar title={"You've reached the bottom!"} /> 
        <SpacerBar />
      </div>
 
    </div>
  );
}

export default App;
