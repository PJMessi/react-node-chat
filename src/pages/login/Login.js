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

        if (authState.error.message)
            return authState.error.message;

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
            console.log(error)
        });      
    }

    return <div className="container">
        <h1>Sign In</h1>
        <div>
            <form 
                action="" 
                onSubmit={(e) => handleLogin(e)}
                style={{
                    border: '1px solid lightgrey',
                    padding: '2rem',
                    borderRadius: '5px'
                }}
            >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        className={emailErrorMessage ? 'form-control is-invalid' : 'form-control'}
                        placeholder="email..."
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {emailErrorMessage}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        className={passwordErrorMessage ? 'form-control is-invalid' : 'form-control'}
                        placeholder="password..."
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {passwordErrorMessage}
                    </div>
                </div>
                <button 
                    className="btn btn-primary" 
                    type="submit" 
                    style={{minWidth: '100px'}}
                    disabled={ authState.loading ? true : false }
                >
                    { authState.loading ? <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" /> : 'Login' } 
                </button>
                <Link to="/register" className="btn btn-link float-right">Create new account?</Link>
            </form>
            
        </div>
    </div>
}

export default Login;