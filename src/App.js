import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks'

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ AddBooks } />
          <Route exact path="/search" component={ SearchBooks } />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
