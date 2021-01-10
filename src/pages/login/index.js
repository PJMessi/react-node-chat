const Login = () => {
    return <>
        <h1>Login page</h1>
        <div>
            <form action="">
                <input 
                    placeholder="email..."
                    type="email" 
                    name="email" 
                    id="email"
                />
                <input 
                    placeholder="password..."
                    type="password" 
                    name="password" 
                    id="password"
                />
                <button type="submit">Login</button>
            </form>

        </div>
    </>
}

export default Login;