import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './styles.module.css'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Aside from '../Aside'
import Main from '../Main'
import Posts from '../publications/Posts'
import CreatePost from '../publications/CreatePost'
import Profile from '../Profile'
import Login from '../Login'
import Register from '../Register'
import Loader from './Loader'

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className={styles.Container}>
          <Aside />
          <Main title="Origamis">
            <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/create-posts" component={CreatePost} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Main>
        </div>
        <Footer disclaimer="Software Uniersity 2019" />
      </div>
    </Router>
  );
}

export default App;
