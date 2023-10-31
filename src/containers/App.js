import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import HeaderLoco from '../components/HeaderLoko';
import FooterLoko from '../components/FooterLoko'; 
import Hooks from '../components/Hooks';
function App() {
  return (

    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet" 
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous">
      </link>
      <Hooks></Hooks>
      
    </div>
  );
}

export default App;
