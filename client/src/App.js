import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Breadcrumb from './features/breadcrumb/breadcrumb';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Breadcrumb/>
    </Router>
    </>
  );
}

export default App;
