import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import Navigation from './components/Navigation/index';
import { SignInForm } from './components/SignIn/index';
import { SignUpForm } from './components/SignUp/index';
import { PasswordForgetForm } from './components/PasswordForget/index'
import AccountPage from './components/Account/index';
import * as ROUTES from './constants/routes';
import './style.css';
import  { FirebaseContext } from './components/Firebase';
import { withAuthentication }  from './components/Session/index';

const Quizzed = ()=>(
    <FirebaseContext.Consumer>
    {firebase => {
  return <div>I've access to Firebase and render something.
    <QuizApp totalQuestions = {10} />
  </div>;
}}
</FirebaseContext.Consumer>)
const  App = ()=>(
  <Router>
    <div>
    <Navigation />
    <hr />
    <Route path = {ROUTES.SIGN_IN} component = {SignInForm}/>
    <Route path = {ROUTES.SIGN_UP} component = {SignUpForm}/>
    <Route path = {ROUTES.ACCOUNT} component = {AccountPage}/>
    <Route path = {ROUTES.PASSWORD_FORGET} component = {PasswordForgetForm} />
    <Route exact path={ROUTES.HOME} component={Quizzed} />
    </div>
  </Router>
)

export default withAuthentication(App);
