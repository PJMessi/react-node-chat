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

    return <>
        <h1>Login page</h1>
        <div>
            <form action="" onSubmit={(e) => handleLogin(e)}>
                <input 
                    placeholder="email..."
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    placeholder="password..."
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

        </div>
    </>
}

export default Login;