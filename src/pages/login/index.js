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
            const resopnse = await login(authDispatch, { email, password });
        } catch (error) {
            console.log(error)
        }
    }

    return <div className="container">
        <h1>Sign In</h1>
        <div>
            <form action="" onSubmit={(e) => handleLogin(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="email..."
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="password..."
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>

        </div>
    </div>
}

export default Login;