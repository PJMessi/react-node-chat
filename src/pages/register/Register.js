import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions/user.action';
import { useAuthContext } from '../../contexts/auth.context';
import { useUserContext } from '../../contexts/user.context';

const Register = (props) => {
  let { authState } = useAuthContext();
  let { userState, userDispatch } = useUserContext();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [passwordConfirmation, setPasswordConfirmation] = useState('');

  const nameErrorMessage = useMemo(() => {
    if (userState.error.errors && userState.error.errors.name)
      return userState.error.errors.name[0];
  }, [userState.error]);

  const emailErrorMessage = useMemo(() => {
    if (userState.error.errors && userState.error.errors.email)
      return userState.error.errors.email[0];
  }, [userState.error]);

  const passwordErrorMessage = useMemo(() => {
    if (userState.error.errors && userState.error.errors.password)
      return userState.error.errors.password[0];
  }, [userState.error]);

  const passwordConfirmationErrorMessage = useMemo(() => {
    if (userState.error.errors && userState.error.errors.password_confirmation)
      return userState.error.errors.password_confirmation[0];
  }, [userState.error]);

  const handleCreateUser = (e) => {
    e.preventDefault();

    createUser(userDispatch, { name, email, password, passwordConfirmation })
      .then(() => {
        props.history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main>
        <div className="layout">
          <div className="main order-md-2">
            <div className="start">
              <div className="container">
                <div className="col-md-12">
                  <div className="content">
                    <h1>Create Account</h1>
                    <form className="signup" onSubmit={(e) => handleCreateUser(e)}>
                      <div className="form-parent">

                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Username"
                            required
                            className={
                              nameErrorMessage
                                ? 'form-control is-invalid'
                                : 'form-control'
                            }
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            {nameErrorMessage}
                          </div>
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className={
                              emailErrorMessage
                                ? 'form-control is-invalid'
                                : 'form-control'
                            }
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            {emailErrorMessage}
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          className={
                            passwordErrorMessage
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          {passwordErrorMessage}
                        </div>
                      </div>


                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          required
                          className={
                            passwordConfirmationErrorMessage
                              ? 'form-control is-invalid'
                              : 'form-control'
                          }
                          value={passwordConfirmation}
                          onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          {passwordErrorMessage}
                        </div>
                      </div>


                      <button
                        type="submit"
                        className="btn button"
                        disabled={userState.loading ? true : false}
                      >
                        {userState.loading ? (
                          <FontAwesomeIcon
                            icon={faCircleNotch}
                            className="fa-spin"
                          />
                        ) : (
                          'Register'
                        )}
                      </button>
                      <div className="callout">
                        <span>
                          Already a member? <Link to="/login">Sign In</Link>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aside order-md-1">
            <div className="container">
              <div className="col-md-12">
                <div className="preference">
                  <h2>Welcome Back!</h2>
                  <p>
                    To keep connected with your friends please login with your
                    personal info.
                  </p>
                  <Link to="/login" className="btn button">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
