import './App.css';
import ProductId from './components/ProductId';
import ViewId from './components/ViewId';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Review from './components/Review';


function App() {
  return (

    <div className="App">
       <Router>
        <Switch>
          <Route exact path='/' component={ProductId} />
          <Route exact path='/viewid' component={ViewId} />
          <Route exact path='/review' component={Review} />
        </Switch>
        </Router>
        
    </div>

  );
}

export default App;
