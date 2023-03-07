import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Wrapper></Wrapper>
      </div>
    </Router>
  );
}

export default App;
