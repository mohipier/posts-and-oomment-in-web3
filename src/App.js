import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Posts from './components/Posts';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      <Router>
        <Routes>
          <Route path='/' exact component={Posts} />
          <Route path='/add' component={AddPost} />
          <Route path='/my-posts' component={Posts} />
          <Route path='/my-comments' component={Posts} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
