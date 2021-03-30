import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './screens/homepage';
import Contact from './screens/contact';
import Timers from './screens/timers';
import FlightScreen from './screens/flight-screen';
import './assets/scss/app.scss';
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/timers">
              <Timers />
            </Route>
            <Route exact path="/flights">
              <FlightScreen />
            </Route>
            <Route exact path="*">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
