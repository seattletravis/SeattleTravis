import './App.css';
import ScrollableGameContent from './components/ScrollableGameContent';
import ScollableGitHubContent from './components/ScrollableGitHubContent';
import NavigationBar from './components/NavigationBar';
import ImageBanner from './components/ImageBanner';
import SpacerBar from './components/SpacerBar';
import { useEffect } from 'react';
import ContactBanner from './components/ContactBanner';
import AboutMe from './components/AboutMe';
import Update from './components/Update';
import React from 'react';

function App() {
	useEffect(() => {
		document.title = 'LamberteDesign';
	}, []);

	return (
		<>
			<div className='zIndex'>
				<div className='background' id='home'>
					<div className='App'>
						<NavigationBar title={'Travis Lamberte'} />
						<Update />
						<ImageBanner imagePath={'images/seattlebanner2.png'} />
						<ContactBanner />
					</div>
				</div>

				{/* <div className='scrollBlock'> */}
				<div>
					<SpacerBar />
					<ScollableGitHubContent />
					<SpacerBar />
					<ScrollableGameContent />
					<SpacerBar />
					<SpacerBar />
					<AboutMe />
					<ContactBanner />
					<ImageBanner imagePath={'images/seattlebanner2.png'} />
					<NavigationBar title={"You've reached the bottom!"} />
					<SpacerBar />
				</div>
			</div>
		</>
	);
}

export default App;
