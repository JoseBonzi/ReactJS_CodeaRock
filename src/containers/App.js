import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import HeaderLoco from '../components/HeaderLoko';
import FooterLoko from '../components/FooterLoko'; 

function App() {
  return (
    <div className="App">
      <HeaderLoco>  </HeaderLoco>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="h1">Vamos que se puede</div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FooterLoko></FooterLoko>
    </div>
  );
}

export default App;
