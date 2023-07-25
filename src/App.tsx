import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import VendorListPage from './pages/VendorList';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vendor-list" component={VendorListPage} />
          </Switch>
      </Router>
  );
}

export default App;
