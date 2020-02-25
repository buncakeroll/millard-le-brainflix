import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Header from "../src/components/header/Header"; 
import MainContent from "../src/components/maincontent/MainContent"; 
import Upload from '../src/components/video/Upload';
import "../src/App.scss";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent}/>
        <Route path="/videos/:id" render = {props =>{
          return (<MainContent {...props} />); 
        }}/>
        <Route path="/upload" component={Upload} />
      </Switch>
    </div>
  );
}

export default App;
