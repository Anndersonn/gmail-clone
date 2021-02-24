import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './Mail/Mail';
import EmailList from './Mail/List/List';
import SendMail from './Sending/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from './features/userSlice';
import Login from './Login/Login';
import { auth } from './firebase';


function App() {
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          emial: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  })
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path='/mail'>
                  <Mail />
                </Route>
                <Route path='/'>
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {SendMessageIsOpen && <SendMail />}
          </div>
        )}
    </Router>
  );
}

export default App;
