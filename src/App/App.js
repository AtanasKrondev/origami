import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Posts from '../Posts/Posts'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main title="Origamis">
          <Posts />
        </Main>
      </div>
      <Footer disclaimer="Software Uniersiti 2019" />
    </div>
  );
}

export default App;
