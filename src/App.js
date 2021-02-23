import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';


function App() {
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
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
    </Router>
  );
}

export default App;
