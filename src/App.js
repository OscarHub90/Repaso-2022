import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
       <header>
        <ul className="navbar">
            <li>Logo</li>
            <li> 
                <button className="button mainButton">Nueva Solicitud</button>
            </li>
            <li>
                <div classNameName="Buscar">
                    <input placeholder="Buscar" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </li>
            <li>
                <div>
                    <button className="button secondaryButton">Consulta estado de tu Solicitud</button>
                </div>
            </li>
        </ul>
        </header>
      <main>
        <section></section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
