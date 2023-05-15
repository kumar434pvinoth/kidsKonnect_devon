import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './components/pages/landingPage/LandingPage';                
import SessionsOverview from './components/pages/sessionsOverview/SessionsOverview';
import ChildrenList from './components/pages/children/ChildrenList';
import NewsList from './components/pages/news/NewsList';
import NotFound from './components/pages/notFound/NotFound';
import Navigation from './components/pages/navigation/Navigation';
import HomeHeader from './components/pages/homeHeader/HomeHeader';
         
function App() {
  const currentUrlHome = window.location.pathname;
  return (
    <div className="App">
       <Router>
          <>
            {currentUrlHome !== '/' &&  <HomeHeader />}
            {currentUrlHome !== '/' &&  <Navigation /> }
            <Switch>
              <Route exact path="/" component={LandingPage} /> 
              <Route exact path="/sessions" component={SessionsOverview} />
              <Route path="/children" component={ChildrenList} />
              <Route path="/news" component={NewsList} />
              <Route component={NotFound} /> 
            </Switch>
          </>
      </Router>
    </div>
  );
}

export default App;
