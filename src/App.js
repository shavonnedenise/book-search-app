import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';
import SearchPage from './pages/SearchPage';
import BookDetailsPage from './pages/BookDetailsPage';

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/book/:bookId" exact component={BookDetailsPage} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

export default App;