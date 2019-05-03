import React from 'react';
import './App.css';
import SimpleComponent from './components/simplecomponent'
import ClassComponent from './components/classcomponent';
import MyHeader from './components/myheader'


function App() {
  return (
  <div>
    <MyHeader title="Mon super composant d'entête">
      <p>Salut</p>
    </MyHeader>
    <SimpleComponent/>
    <ClassComponent/>
  </div>
  );
}

export default App;
