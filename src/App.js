import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth.context';
import { UserContextProvider } from './contexts/user.context';
import { MessageContextProvider } from './contexts/messages.context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentContextProvider } from './contexts/payment.context';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <MessageContextProvider>
          <UserContextProvider>
            <PaymentContextProvider>
              <Elements stripe={stripePromise}>
                <Router>
                  <Switch>

                    <Route path="/(login|register)/" exact>
                      <AuthLayout></AuthLayout>
                    </Route>

                    <Route>
                      <MainLayout></MainLayout>
                    </Route>

                  </Switch>
                </Router>
              </Elements>
            </PaymentContextProvider>
          </UserContextProvider>
        </MessageContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
