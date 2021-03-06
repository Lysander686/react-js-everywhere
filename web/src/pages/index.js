// import React and routing dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';

import SignIn from './signin';
import SignUp from './signup';

// define routes
const Pages = (props) => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage} />
        {/*// within the Pages component add the route*/}
        <Route path="/signup" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
      </Layout>
    </Router>
  );
};

export default Pages;
