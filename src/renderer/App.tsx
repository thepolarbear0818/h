import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/backg.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Random Number Generator</h1>
      <div className="Hello">
        <a
          href="https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=html&rnd=new"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Generate New Number (1-100)
          </button>
        </a>
        
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
