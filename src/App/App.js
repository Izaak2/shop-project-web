import logo from './logo.svg';
import './App.css';
import HttpService from "../Services/http-service";

const http = new HttpService();



function App(props) {

  http.getProducts();

  return (
    <div className="container App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}
export default App;
