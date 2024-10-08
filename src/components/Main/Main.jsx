import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import style from '../Main/Main.module.css';
import Home from './Home/Home';
import PersonalPolicy from './PersonalPolicy/PersonalPolicy';

const Main = () => {
  return (
    <main className={style.main}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/personal_policy' component={PersonalPolicy} />
        <Redirect exact from='*' to='/' />
      </Switch>
    </main>
  );
};

export default Main;
