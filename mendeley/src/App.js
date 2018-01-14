import React, { Component } from 'react';
import './App.css';
import UtilizatorList from './UtilizatorList';
import DocumenteList from './DocumenteList';
import CategorieList from './CategorieList';

class App extends Component {
  constructor(props){
    super(props)
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🔬Mendeley⚛️</h1>
        
        </header>
         <h2 className="h2Title" >Science research</h2>
         <h3 className="h3Title">Utilizatori</h3>
       <UtilizatorList />
       <h5 className="h3Title">Categorii</h5>
       <CategorieList/>
       <h4 className="h3Title">Documente</h4>
       <DocumenteList/>
      </div>
    );
  }
}

export default App;
