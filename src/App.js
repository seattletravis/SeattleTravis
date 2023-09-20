import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScrollableVideoContent from './components/ScrollableVideoContent';
import ScrollableTShirtContent from './components/ScrollableTShirtContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import ImageBanner from './components/ImageBanner';
import SpacerBar from './components/SpacerBar';
import { useEffect } from 'react';
import ContactBanner from './components/ContactBanner';


function App() {

  useEffect(()=>{
    document.title = 'LamberteDesign'
  }, []);

  return (
    <div>
      <div className='background' id='home'>
        <div className="App">
          <NavigationBar title={"LamberteDesign"}/>
          <ImageBanner imagePath={'images/seattlebanner2.png'} />
          <ContactBanner imagePath={'images/seattlebanner2.png'}/>
        </div>
      </div>

      <div className='scrollBlock'>

        <ScrollableGameContent />
        <SpacerBar />
        <ScrollableVideoContent />
        <SpacerBar />
        <ScollableGitHubContent />
        <SpacerBar />
        <SpacerBar />
        <ScrollableTShirtContent />
        <SpacerBar />
        <SpacerBar />
        <SpacerBar />
        <SpacerBar />
        <SpacerBar />
        <ImageBanner imagePath={'images/seattlebanner2.png'} />
        <NavigationBar title={"You've reached the bottom!"} /> 
        <SpacerBar />
      </div>
 
    </div>
  );
}

export default App;
