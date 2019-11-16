import React from 'react';
import styles from './styles.module.css'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Aside from '../Aside'
import Main from '../Main'
import Posts from '../Posts'

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <div className={styles.Container}>
        <Aside />
        <Main title="Origamis">
          <Posts />
        </Main>
      </div>
      <Footer disclaimer="Software Uniersity 2019" />
    </div>
  );
}

export default App;
