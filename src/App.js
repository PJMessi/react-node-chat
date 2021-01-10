import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './route';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          {
            routes.map((route) => {
              return <Route 
                exact
                key={route.path} 
                path={route.path} 
                component={route.component}
              ></Route>
            })
          }

        </Switch>
      </Router>

    </div>
  );
}

export default App;
