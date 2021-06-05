import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/projects/createProject';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
