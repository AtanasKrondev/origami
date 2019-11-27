import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styles from './styles.module.css'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Aside from '../Aside'
import Main from '../Main'
import Posts from '../publications/Posts'
import CreatePost from '../publications/CreatePost'
import Detail from '../publications/Detail'
import Profile from '../Profile'
import Login from '../Login'
import Logout from '../Logout'
import Register from '../Register'
import Loader from './Loader'
import NotFound from '../NotFound'
import userService from '../services/user-service'

// const Profile = React.lazy(() => import('../Profile'))

function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }

  render() {
    const { isLogged } = this.state;

    return (
      <Router>
        <div className={styles["App"]}>
          <Loader local={true} isLoading={false} />
          <Navigation isLogged={isLogged} />
          <div className={styles["Container"]}>
            <Aside isLogged={isLogged} />
            <Switch>
              <Route path="/" exact><Redirect to="/posts" /></Route>
              <Route path="/posts" render={render('Publications', Posts, { isLogged })} />
              <Route path="/post/:id" render={render('Post', Detail, { isLogged })} />
              <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />
              <Route path="/create-posts" render={render('Create Post', CreatePost, { isLogged })} />
              <Route path="/profile" render={render('Profile', Profile, { isLogged })} />
              {/* <Route path="/create-posts">
                <Main title="Create Post"><CreatePost /></Main>
              </Route>
              <Route path="/profile">
                <Main title="Profile">
                  <React.Suspense fallback={<Loader isLoading={true} />}>
                    <Profile></Profile>
                  </React.Suspense>
                </Main>
              </Route> */}
              <Route path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
              <Route path="/register" render={render('Register', Register, { isLogged })} />
              <Route path="*">
                <Main title="Not Found"><NotFound /></Main>
              </Route>
            </Switch>
          </div>
          <Footer isLogged={isLogged} />
        </div>
      </Router >
    );
  }
}
export default App;
