import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Matches from "./views/Matches";
import Match from "./views/Match";
import Teams from "./views/Teams";
import Bet from "./views/Bet";
import Signup from "./views/Signup";
import Login from "./views/Login";
import BetHistory from "./views/BetHistory";
import AuthService from "./services/Auth/AuthService";
import Profile from "./views/Profile";
import Chat from "./views/Chat";


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();
    const user = AuthService.getCurrentUser();


  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            {user &&
                <AppRoute exact path="/bet/history" component={BetHistory} layout={LayoutDefault}/>
            }
            {user &&
            <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault}/>
            }

            <AppRoute exact path="/chat" component={Chat} layout={LayoutDefault}/>

            <AppRoute exact path="/matches" component={Matches} layout={LayoutDefault}/>
            <AppRoute exact path="/match" component={Match} layout={LayoutDefault}/>
            <AppRoute exact path="/bet" component={Bet} layout={LayoutDefault}/>
            <AppRoute exact path="/teams" component={Teams} layout={LayoutDefault}/>
            {!user &&
                <AppRoute exact path="/signup" component={Signup} layout={LayoutDefault}/>
            }
            {!user &&
                <AppRoute exact path="/login" component={Login} layout={LayoutDefault}/>
            }

        </Switch>
      )} />
  );
}

export default App;