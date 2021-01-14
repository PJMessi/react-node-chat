import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './contexts/auth.context';
import AppRoute from './components/AppRoute';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavigationBar from './components/NavigationBar';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/error/Notfound';
import Payment from './pages/payment';
import { UserContextProvider } from './contexts/user.context';
import { MessageContextProvider } from './contexts/messages.context';
import Register from './pages/register/Register';

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
      <MessageContextProvider>
      <UserContextProvider>

        <Router>
          <Switch>
            <Route path="/(login|register)/" exact>
              <AuthLayout>
                <Switch>

                  <AppRoute
                    path="/login"
                    component={Login}
                    isPrivate={false}
                  ></AppRoute>

                  <AppRoute
                    path="/register"
                    component={Register}
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

      </UserContextProvider>
      </MessageContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
