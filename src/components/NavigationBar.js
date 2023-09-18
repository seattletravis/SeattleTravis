import { Link } from 'react-scroll';
import React from 'react';
import { useState } from 'react';



function NavigationBar(props){

  const [isSmall, setIsSmall] = useState(window.innerWidth<1200)

  React.useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth<1200)
}
    window.addEventListener('resize', handleResize)
  })





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