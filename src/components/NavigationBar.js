import { Link } from 'react-scroll';
import React from 'react';
import useScreenSmall from '../hooks/useScreenSmall';

function NavigationBar(props){

  const isSmall = useScreenSmall()

  const menuItems = [
    {id: 1, title: 'home'},
    {id: 2, title: 'games'},
    {id: 3, title: 'youtube'},
    {id: 4, title: 'github'},
    {id: 5, title: 'tshirts'},
  ]

return(
    <>
      <nav>
        <h1 className={isSmall ? 'navBarTitleSmallScreen' : 'navBarTitle'}>{props.title}</h1>
          <ul>
            {menuItems.map(menu => (
              <li key={menu.id} className={isSmall ? 'navButtonsSmallScreen' : 'navButtons'}>
                <Link to={menu.title} smooth={true} offset={0} duration={1000}>{menu.title}</Link>
              </li>
            ))}      
          </ul>
      </nav>
    </>
  )
}

export default NavigationBar;