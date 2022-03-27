import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    Time: "Loading..."
  };
  componentDidMount() {
    fetch("/api/time")
      .then(res => res.json())
      .then(json => {
        this.setState({ Time: json });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Khush Soni is here! :)</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.Time}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
