import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Breadcrumb from './features/breadcrumb/breadcrumb';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Breadcrumb/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
