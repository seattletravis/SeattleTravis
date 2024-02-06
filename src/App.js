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
import AboutMe from './components/AboutMe';
import Update from './components/Update';

function App() {
	useEffect(() => {
		document.title = 'LamberteDesign';
	}, []);

	return (
		<>
			<NavigationBar title={'Travis Lamberte'} />
			<div className='background' id='home'>
				<div className='App'>
					<Update />
					<ImageBanner imagePath={'images/seattlebanner2.png'} />
					<ContactBanner />
				</div>
			</div>

			<div className='scrollBlock'>
				<SpacerBar />
				<ScollableGitHubContent />
				<SpacerBar />
				<ScrollableGameContent />
				<SpacerBar />
				<ScrollableVideoContent />
				<SpacerBar />
				<SpacerBar />
				<ScrollableTShirtContent />
				<SpacerBar />
				<AboutMe />
				<ContactBanner />
				<ImageBanner imagePath={'images/seattlebanner2.png'} />
				<NavigationBar title={"You've reached the bottom!"} />
				<SpacerBar />
			</div>
		</>
	);
}

export default App;
