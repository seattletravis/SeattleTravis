import NavigationBar from './NavigationBar';
import React from 'react';
import ImageBanner from './ImageBanner';
import useScreenSmall from '../hooks/useScreenSmall';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function ScollableGitHubContent() {
	const isSmall = useScreenSmall();

	const gitData = [
		{
			id: '11',
			title: 'SnakeBoidAI',
			language: 'JavaScript',
			image: 'images/youtube/snakeLD.png',
			libraries: '',
			url: 'https://github.com/seattletravis/SnakeEatsBoids',
		},
		{
			id: '12',
			title: 'Dev Log is a Blog',
			language: 'Markdown',
			image: 'images/youtube/blog.png',
			libraries: '',
			url: 'https://github.com/seattletravis/blog',
		},
		{
			id: '1',
			title: 'LamberteDesign.com',
			language: 'React, JavaScript, CSS',
			image: 'images/youtube/lamberte.png',
			libraries: '',
			url: 'https://github.com/seattletravis/LamberteDesign',
		},
		{
			id: '2',
			title: 'Tilt3D Single Player',
			language: 'JavaScript, HTML, CSS',
			image: 'images/youtube/tilt3d1.png',
			libraries: 'ThreeJS, CannonES',
			url: 'https://github.com/seattletravis/Tilt3DSinglePlayer.git',
		},
		{
			id: '3',
			title: 'Tilt3D Multi Player',
			language: 'JavaScript, HTML, CSS',
			image: 'images/youtube/tilt3d2.png',
			libraries: 'ThreeJS, Cannon ES',
			url: 'https://github.com/seattletravis/Tilt3DMultiPlayer.git',
		},
		{
			id: '10',
			title: 'Little Lemon Website',
			language: 'React, JavaScript, CSS',
			image: 'images/youtube/lemon.png',
			libraries: '',
			url: 'https://github.com/seattletravis/little-lemon',
		},
		{
			id: '4',
			title: 'Uncha Software Part 1',
			language: 'Python',
			image: 'images/youtube/uncha1.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_1.git',
		},
		{
			id: '5',
			title: 'Uncha Software Part 2',
			language: 'Python',
			image: 'images/youtube/uncha2.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_2.git',
		},
		{
			id: '6',
			title: 'Uncha Software Part 3',
			language: 'Python',
			image: 'images/youtube/uncha3.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_3.git',
		},
		{
			id: '7',
			title: 'Uncha Software Part 4',
			language: 'Python',
			image: 'images/youtube/uncha4.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_4.git',
		},
		{
			id: '8',
			title: 'Uncha Software Part 5',
			language: 'Python',
			image: 'images/youtube/uncha5.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_5.git',
		},
		{
			id: '9',
			title: 'Uncha Software Part 6',
			language: 'Python',
			image: 'images/youtube/uncha6.png',
			libraries: 'rembg, tkinter, threading, pillow, os',
			url: 'https://github.com/seattletravis/bg_remover_Part_6.git',
		},
	];

	const renderedGit = gitData.map((git) => {
		return (
			<React.Fragment key={git.id}>
				<div className='displayTiles dTGits'>
					<a href={git.url} target='blank'>
						<img src={git.image} alt='' />
					</a>
					<div
						className={
							isSmall
								? 'responsiveFontSizingSmallScreen'
								: 'responsiveFontSizing'
						}>
						<div className={isSmall ? 'hideButton' : ''}>
							<div className='playButton'>
								<a href={git.url} target='blank'>
									CODE NOW!
								</a>
							</div>
						</div>
						<h1>{git.title}</h1>
						<h2>{git.language}</h2>
						<h2>{git.libraries}</h2>
					</div>
				</div>
			</React.Fragment>
		);
	});

	return (
		<>
			<div id='github'></div>
			<NavigationBar title={'GitHub'} />
			<ImageBanner imagePath={'images/githubbanner.png'} />
			<ScrollMenu
				className='scrollMenu'
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}>
				{renderedGit}
			</ScrollMenu>
		</>
	);
}

export default ScollableGitHubContent;
