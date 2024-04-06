import React from 'react';
import './App.scss';
import AppLayout from "./components/AppContent/AppContent";


const App: React.FC = () => {
  return (
    <div className='App'>
      <div className="spinner-container">
        <AppLayout />
      </div>
    </div>
  )
};

export default App;
