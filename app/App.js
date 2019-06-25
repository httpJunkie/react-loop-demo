import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import { getCurrentDate } from './utils/date'

import './App.css';
import logo from './images/logo.png';

import { AppProvider } from "./AppContext";

import Home from './view-components/Home';
import Todos from './view-components/todos/Todos';
import Todoz from './view-components/todos/Todoz';

import SideNav from './partial-components/Sidenav';
import TopNav from './partial-components/Topnav';

const App = () => {
  let isMediumPlus = useMediaPredicate("(min-width: 600px)") ? false : true;
  let currentDate = getCurrentDate('year', '');

  return (
    <AppProvider>
      <BrowserRouter>
        <div className={`app-container ${!isMediumPlus ? 'medium' : 'small'}`}>
          <main>

            <header>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <TopNav />
            </header>

            <section>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todos" component={Todos} />
                <Route exact path="/todoz" component={Todoz} />
                <Route render={() => <h2 className="four-o-four">404 Page Not Found</h2>} />
              </Switch>
            </section>

            <footer>
              <p>The Todo Company &copy; {currentDate}</p>
            </footer>

          </main>
          <SideNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;