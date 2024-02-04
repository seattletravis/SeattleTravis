import { Link } from 'react-scroll';
import React from 'react';
import useScreenSmall from '../hooks/useScreenSmall';

function NavigationBar({ title }) {
	const isSmall = useScreenSmall();

	const menuItems = [
		{ id: 1, title: 'home' },
		{ id: 2, title: 'games' },
		{ id: 3, title: 'youtube' },
		{ id: 4, title: 'github' },
		{ id: 5, title: 'apparal' },
	];

	return (
		<>
			<nav>
				<h1 className={isSmall ? 'navBarTitleSmallScreen' : 'navBarTitle'}>
					{title}
				</h1>
				<ul>
					{menuItems.map((menu) => (
						<li key={menu.id}>
							<Link to={menu.title} smooth={true} offset={0} duration={1000}>
								<h3
									className={isSmall ? 'navButtonsSmallScreen' : 'navButtons'}>
									{menu.title}
								</h3>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default NavigationBar;
