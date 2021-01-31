import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClassDetails from './Component/ClassDetails/ClassDetails';
import HomePage from './Component/HomePage/HomePage';
import MemberShip from './Component/MemberShip/MemberShip';
import OurClasses from './Component/OurClasses/OurClasses';
import Pricing from './Component/Pricing/Pricing';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop showBelow={250}/>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/our-classes'>
            <OurClasses />
          </Route>
          <Route path='/our-classes/class/:ClassParameter'>
            <ClassDetails />
          </Route>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/membership'>
            <MemberShip />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
