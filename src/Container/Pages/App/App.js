import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';
import { Provider } from 'react-redux'
import { store } from '../../../Config/Redux'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
