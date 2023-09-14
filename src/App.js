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
          <NavigationBar />
          <IntroductionBar />
        </div>
      </div>

      <div className='scrolldivs'>
        <ScrollableGameContent />
        <ScrollableVideoContent />
        <ScollableGitHubContent />
        <ScrollableTShirtContent />
      </div>
 
    </div>
  );
}

export default App;
