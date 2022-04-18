import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home.js';
import Project from './Project';
import Service from './Service';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
