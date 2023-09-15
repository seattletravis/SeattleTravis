import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import IntroductionBar from './components/IntroductionBar';


function App() {

  return (
    <div>
      <div className='background' id='home'>
        <div className="App">
          <NavigationBar title={"LamberteDesign"}/>
          <IntroductionBar imagePath={'images/seattle.jpg'} />
        </div>
      </div>

      <div className='scrolldivs'>
        <ScrollableGameContent />
        <IntroductionBar imagePath={'images/gamesbar.png'}/>
        <ScrollableVideoContent />
        <IntroductionBar imagePath={'images/gamesbar.png'}/>

        <ScollableGitHubContent />
        <IntroductionBar imagePath={'images/gamesbar.png'}/>

        <ScrollableTShirtContent />
        <IntroductionBar imagePath={'images/gamesbar.png'}/>

      </div>
 
    </div>
  );
}

export default App;
