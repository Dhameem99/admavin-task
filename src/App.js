import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SquareSplit from './pages/SqareSplit/SquareSplit';
import Navbar from './pages/Navbar/Navbar';
import InfiniteScroll from './pages/InfiniteScroll/InfiniteScroll';
//import InfiniteScroll from 'react-infinite-scroller';
//import InfiniteScroll from 'react-infinite-scroller';

function App() {
  
  return (
    <Router>
  <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<SquareSplit />} />
        <Route path='/InfiniteScroll' element={<InfiniteScroll />} />
        </Routes>
      
        
        
    </div>
    </Router>
  );
}

export default App;
