import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { MyProfile } from './myProfile';

import { isUserLoogedIn, logoutUser } from './store/actions/userActions';

import './App.css';
import { getUserCart } from './store/actions/cartActions';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const remainingTime = useRef(null);

  let logoutTimmer = useCallback(
    (time) => {
      setTimeout(() => dispatch(logoutUser()), time);
    },
    [dispatch]
  );

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

  useEffect(() => {
    if (userData) {
      dispatch(getUserCart(userData.token));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  useEffect(() => {
    if (!!userData && !remainingTime.current) {
      remainingTime.current = userData.remainingTime;
      logoutTimmer(remainingTime.current);
    } else if (!userData && remainingTime.current) {
      remainingTime.current = null;
      clearTimeout(logoutTimmer);
    }
  }, [userData, dispatch, logoutTimmer]);

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
