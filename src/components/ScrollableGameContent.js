import NavigationBar from './NavigationBar';
import React from 'react';
import ImageBanner from './ImageBanner';
import useScreenSmall from '../hooks/useScreenSmall';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function ScrollableGameContent() {
	const isSmall = useScreenSmall();

	const gameData = [
		{
			id: '8',
			title: 'Snake Boid AI',
			language: 'JavaScript',
			url: 'https://lambertedesign.com',
			image: 'images/games/snakeLD.png',
			libraries: 'VictorJS',
		},
		{
			id: '1',
			title: 'Tilt3D Single Player',
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/tilt3dSinglePlayer/index.html',
			image: 'images/games/tilt3d1.png',
			libraries: 'ThreeJS, CannonES',
		},
		{
			id: '3',
			title: 'Bubble Gum Game',
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/bubbleGum/index.html',
			image: 'images/games/gum.png',
			libraries: 'ThreeJS',
		},
		{
			id: '2',
			title: 'Tilt3D Multi Player',
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/tilt3dMultiPlayer/index.html',
			image: 'images/games/tilt3d2.png',
			libraries: 'ThreeJS, CannonES',
		},
		{
			id: '4',
			title: "Beemo's Date & Time Page",
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/clock/index.html',
			image: 'images/games/beemo.png',
			libraries: '',
		},
		{
			id: '5',
			title: 'Orbits',
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/orbit/index.html',
			image: 'images/games/orbits.png',
			libraries: '',
		},
		{
			id: '6',
			title: "90's Throwback",
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/throwback90s/index.html',
			image: 'images/games/throwback.png',
			libraries: '',
		},
		{
			id: '7',
			title: 'Tetrominos',
			language: 'JavaScript, HTML, CSS',
			url: 'https://travis.lamberte.com/tetromino/index.html',
			image: 'images/games/tetro.png',
			libraries: '',
		},
	];

	const renderedGames = gameData.map((game) => {
		return (
			<React.Fragment key={game.id}>
				<div className='displayTiles dTGames'>
					<a href={game.url} target='blank'>
						<img src={game.image} alt='' />
					</a>
					<div
						className={
							isSmall
								? 'responsiveFontSizingSmallScreen'
								: 'responsiveFontSizing'
						}>
						<div className={isSmall ? 'hideButton' : ''}>
							<div className='playButton'>
								<a href={game.url} target='blank'>
									PLAY NOW!
								</a>
							</div>
						</div>
						<h1>{game.title}</h1>
						<h2>{game.language}</h2>
						<h2>{game.libraries}</h2>
					</div>
				</div>
			</React.Fragment>
		);
	});

	return (
		<>
			<div id='games'></div>
			<NavigationBar title={'Games'} />
			<ImageBanner imagePath={'images/gamesbanner3.png'} />
			<ScrollMenu
				className='scrollMenu'
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}>
				{renderedGames}
			</ScrollMenu>
		</>
	);
}

export default ScrollableGameContent;
