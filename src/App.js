import React from 'react';
import Navbar from './component/layout/Navbar';
import './style/App.scss';
import Home from './component/layout/Home'
import Student from './component/layout/Student';
//import { BrowserRouter, Route } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StudentForm from './component/layout/StudentForm';
import { Provider } from 'react-redux';
import store, {rrfProps} from './store';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";




function App() {
  return (
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/Student" component={Student} />
      <Route exact path="/StudentForm/:id?" component={StudentForm} />
      </Switch>
      <Home />
    </div>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
