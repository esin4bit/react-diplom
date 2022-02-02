import React from 'react';
import Context from './context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PhotoGallery from './pages/PhotoGallery';
import PhotoPage from './pages/PhotoPage';
import Counter from './features/counter/Counter';

const menuStyle = {
  display: 'flex',
  gap: '10px',
  border: '1px solid gray'
}

function App() { 
  return (<Router>
    <Context.Provider>
      <div className="wrapper">    	        
        <Counter/>
        <ul style={menuStyle}>
          <li><Link to={`/`}>Main</Link></li>
          <li><Link to={`/photoGallery`}>Gallery</Link></li>
        </ul> 
        <Routes>
          <Route path="/" element={<PhotoGallery/>} />
          <Route path="/photoGallery" element={<PhotoGallery/>} />
          <Route path="/photo/:id" element={<PhotoPage/>} />
        </Routes>  
      </div> 
      
    </Context.Provider>
  </Router>)
}

export default App;

