import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import ImageBanner from './components/ImageBanner';
import SpacerBar from './components/SpacerBar';


function App() {

  return (
    <div>
      <div className='background' id='home'>
        <div className="App">
          <NavigationBar title={"LamberteDesign"}/>
          <ImageBanner imagePath={'images/seattlebanner2.png'} />
        </div>
      </div>

      <div className='scrollBlock'>
        <SpacerBar />
        <ScrollableGameContent />
        <SpacerBar />

        <ScrollableVideoContent />
        <SpacerBar />

        <ScollableGitHubContent />
        <SpacerBar />


        <SpacerBar />
        <ScrollableTShirtContent />
        {/* <NavigationBar title={"Lets Play BubbleGum!"} />  */}
        {/* <iframe className="iframe" title="Hello World" src='https://travis.lamberte.com/bubbleGum/index.html' /> */}
        <SpacerBar />
        <SpacerBar />
        <SpacerBar />
        <SpacerBar />
        <NavigationBar title={"You've reached the bottom!"} /> 
        <SpacerBar />
      </div>
 
    </div>
  );
}

export default App;
