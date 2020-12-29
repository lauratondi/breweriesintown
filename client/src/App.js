import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Breweries from './components/Breweries';
import Brewery from './components/Brewery';
import Beer from './components/Beer';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <div className='container-fluid'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/breweries' component={Breweries} />
              <Route exact path='/brewery/:id' component={Brewery} />
              <Route exact path='/beer/:id' component={Beer} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
