import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './contexts/auth.context';
import AppRoute from './components/AppRoute';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavigationBar from './components/NavigationBar';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/error/notfound';
import Payment from './pages/payment';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

const AuthLayout = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/login" exact>
              <AuthLayout>
                <Switch>
                  <AppRoute
                    path="/login"
                    component={Login}
                    isPrivate={false}
                  ></AppRoute>
                </Switch>
              </AuthLayout>
            </Route>

            <Route>
              <MainLayout>
                <Switch>
                  <AppRoute
                    exact
                    path="/"
                    component={Dashboard}
                    isPrivate={true}
                  ></AppRoute>

                  <AppRoute
                    exact
                    path="/payment"
                    component={Payment}
                    isPrivate={true}
                  ></AppRoute>

                  <AppRoute
                    exact
                    path="*"
                    component={NotFound}
                    isPrivate={true}
                  ></AppRoute>
                </Switch>
              </MainLayout>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
