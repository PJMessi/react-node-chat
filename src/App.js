import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './route';
import './App.css';
import { AuthContextProvider } from './contexts/auth.context';
import AppRoute from './components/AppRoute';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

        <NavigationBar/>

        <Router>
          <Switch>
            {routes.map((route) => {
              return (
                <AppRoute
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                ></AppRoute>
              );
            })}
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
