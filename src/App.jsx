import Oscar from './components/componentPrueba';
import Logo from './media/Logo.png';
import './App.css';

function App() {
  return (
    <div classNameName="App">
       <header>
          <h1 className='navbar'>Bienvenid@, Al sistema de control activos</h1>
        </header>
      <main>
      <ul>
      <li className='logo'>
          <img src={Logo} alt='Logo'/>
          </li>
          <li> 
             <button className="button mainButton">Nueva Solicitud</button>
          </li>
          <li>
              <div>
                  <button className="button secondaryButton"> Ver Estado de Solicitud</button>
               </div>
          <li>
              <div >
                  <button className="button buscar ">Instructivo PDF </button>
                   <i className="fa-solid fa-magnifying-glass logoBusqueda"></i>
              </div>
          </li>
            </li>
      </ul>
    </main>
    <footer>
      <Oscar/>
    </footer>
    </div>
  );
}

export default App;

