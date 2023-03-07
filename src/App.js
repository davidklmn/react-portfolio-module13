import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
// Importing pages
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import '../src/components/pages/home.css';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Wrapper id="wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
