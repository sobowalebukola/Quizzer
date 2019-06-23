import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import Navigation from './components/Navigation/index';
import SignInForm  from './components/SignIn/index';
import { SignUpForm } from './components/SignUp/index';
import  Landing  from './components/LandingPage/index';
import { PasswordForgetForm } from './components/PasswordForget/index'
import AccountPage from './components/Account/index';
import * as ROUTES from './constants/routes';
import './style.css';
import  { FirebaseContext } from './components/Firebase';
import { withAuthentication }  from './components/Session/index';

const Quizzed = ()=>(
    <FirebaseContext.Consumer>
    {firebase => {
  return <QuizApp totalQuestions = {10} />
}}
</FirebaseContext.Consumer>)
const  App = ()=>(
  <Router>
    <div>
    <Route exact path = {ROUTES.SIGN_IN} component = {SignInForm}/>
    <Route exact path = {ROUTES.LANDING} component = {Landing} />
    <Route exact path = {ROUTES.SIGN_UP} component = {SignUpForm}/>
    <Route exact path = {ROUTES.ACCOUNT} component = {AccountPage}/>
    <Route eaxct path = {ROUTES.PASSWORD_FORGET} component = {PasswordForgetForm} />
    <Route exact path={ROUTES.HOME} component={Quizzed} />
    </div>
  </Router>
)

export default withAuthentication(App);
