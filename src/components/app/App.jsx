import { useState } from 'react';

import HeaderText from '../headerText/HeaderText';
import AuthForm from '../authForm/AuthForm';
import TryItBlock from '../tryItBlock/TryItBlock';

import './app.scss';

function App() {
  return (
    <div className='app'>
      <div className='content'>
        <HeaderText/>
        <TryItBlock/>
        <AuthForm/>
      </div>
    </div>
  );
}

export default App;