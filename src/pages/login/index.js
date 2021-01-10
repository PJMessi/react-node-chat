import { useState } from 'react';
import { useAuthContext } from '../../contexts/auth.context'; 
import { login } from '../../actions/auth.action';

const Login = () => {
    let { authState, authDispatch } = useAuthContext();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        
        try {
            const response = await login(authDispatch, { email, password });
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error)
        }
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
                        className={authState.errors.email ? 'form-control is-invalid' : 'form-control'}
                        placeholder="email..."
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {authState.errors.email && authState.errors.email[0]}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        className={authState.errors.password ? 'form-control is-invalid' : 'form-control'}
                        placeholder="password..."
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {authState.errors.password && authState.errors.password[0]}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>

        </div>
    </div>
}

export default Login;