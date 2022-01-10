import React, { useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Shop } from './shop';
import { Navigation } from './navigation';
import { MainPage } from './main';
import { Footer } from './footer';
import { ContactPage } from './contactForm';
import { Auth } from './auth';
import { Cart } from './cart';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLoogedIn } from './store/actions/userActions';
import { MyProfile } from './myProfile';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const routes = useMemo(() => {
    if (userData) {
      return (
        <React.Fragment>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/profile'>
            <MyProfile />
          </Route>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Redirect to='/' />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Redirect to='/auth' />
        </React.Fragment>
      );
    }
  }, [userData]);

  useEffect(() => {
    dispatch(isUserLoogedIn());
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Cart />
        <div
          style={{
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          <Switch>{routes}</Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
