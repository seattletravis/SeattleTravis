import './App.css';

function App() {

  const menuItems = [
    {
      id: 1,
      title: 'home'
    },
    {
      id: 2,
      title: 'portfolio'
    },
    {
      id: 3,
      title: 'contact'
    },
    {
      id: 4,
      title: 'about'
    },
  ]

  return (
    <div className="App">
      <header>
        <nav>
          <h2>LamberteDesign</h2>
        </nav>
        
        <ul>
          {menuItems.map(menu => (
            <li><a href={`#${menu.title}`}>{menu.title}</a></li>
          ))}      
        </ul>
      </header>
      <main>

        {menuItems.map(menu => (
          <div className='content'>
            <h1 className="content-header" id={menu.title}>{menu.title}</h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
