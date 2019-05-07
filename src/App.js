import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Myapp from './components/authComponents/Myapp'
import store from './store'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { setAuthorizationToken, setCurrentUser } from './actions/auth';


if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Myapp />
      </Router>  
    </Provider>
  );
}


export default App;

