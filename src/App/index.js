import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './styles.module.css'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Aside from '../Aside'
import Main from '../Main'
import Posts from '../publications/Posts'
import CreatePost from '../publications/CreatePost'
// import Detail from '../publications/Detail'
// import Profile from '../Profile'
import Login from '../Login'
import Register from '../Register'
import Loader from './Loader'
import NotFound from '../NotFound'
const Profile = React.lazy(() => import('../Profile'))

function render(title, Cmp) {
  return function () {
    return <Main title={title}><Cmp /></Main>
  }
}

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className={styles.Container}>
          <Aside />
          <Switch>
            <Route path="/" exact render={render('Origamis', Posts)} />
            {/* <Route path="/:id" exact render={render('Post', Detail)} /> */}
            <Route path="/create-posts" render={render('Share your origami', CreatePost)} />
            <Route path="/profile">
              <React.Suspense fallback={<Loader isLoading={true} />}>
                <Profile />
              </React.Suspense>
            </Route>
            <Route path="/login" render={render('Login', Login)} />
            <Route path="/register" render={render('Register', Register)} />
            <Route render={render('Page Not Found!', NotFound)} />
          </Switch>
        </div>
        <Footer disclaimer="Software Uniersity 2019" />
      </div>
    </Router >
  );
}

export default App;
