import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={HomePage} />
        <Route exact path='/videoPlayer' component={VideoPlayer} />
    </div>
    </Router>
  );
}

export default App;
