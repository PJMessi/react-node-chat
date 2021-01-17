import { useMemo, useState } from 'react';
import { useAuthContext } from '../../contexts/auth.context';
import { login } from '../../actions/auth.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = (props) => {
  let { authState, authDispatch } = useAuthContext();

  let [email, setEmail] = useState('pjmessi25@gmail.com');
  let [password, setPassword] = useState('password');

  const emailErrorMessage = useMemo(() => {
    if (authState.error.errors && authState.error.errors.email)
      return authState.error.errors.email[0];

    if (authState.error.message) return authState.error.message;
  }, [authState.error]);

  const passwordErrorMessage = useMemo(() => {
    if (authState.error.errors && authState.error.errors.password)
      return authState.error.errors.password[0];
  }, [authState.error]);

  const handleLogin = (e) => {
    e.preventDefault();

    login(authDispatch, { email, password })
      .then(() => {
        // setEmail('');
        // setPassword('');
        props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="main order-md-1">
        <div className="start">
          <div className="container">
            <div className="col-md-12">
              <div className="content">
                <h1>Sign in to Swipe</h1>
              
                <form onSubmit={(e) => handleLogin(e)}>

                  <div className="form-group">
                    <input
                      type="email"
                      className={
                        emailErrorMessage ? 'form-control is-invalid' : 'form-control'
                      }
                      placeholder="Email Address"
                      required
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">{emailErrorMessage}</div>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className={
                        passwordErrorMessage
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      placeholder="Password"
                      required
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">{passwordErrorMessage}</div>
                  </div>

                  <button
                    className="btn button"
                    type="submit"
                    style={{ minWidth: '100px' }}
                    disabled={authState.loading ? true : false}
                  >
                    {authState.loading ? (
                      <FontAwesomeIcon
                        icon={faCircleNotch}
                        className="fa-spin"
                      />
                    ) : (
                      'Login'
                    )}
                  </button>

                  <div className="callout">
                    <span>
                      Don't have account?{' '}
                      <a href="sign-up.html">Create Account</a>
                    </span>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aside order-md-2">
        <div className="container">
          <div className="col-md-12">
            <div className="preference">
              <h2>Hello, Friend!</h2>
              <p>
                Enter your personal details and start your journey with Swipe
                today.
              </p>
              <Link to="/register" className="btn button">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
