import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { createUser } from "../../actions/user.action";
import { useAuthContext } from "../../contexts/auth.context";
import { useUserContext } from "../../contexts/user.context";

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
            console.log(error)
        });      
    }

    return <div className="container">
        <h1>Sign Up</h1>
        <div>
            <form 
                action="" 
                onSubmit={(e) => handleCreateUser(e)}
                style={{
                    border: '1px solid lightgrey',
                    padding: '2rem',
                    borderRadius: '5px'
                }}
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        className={nameErrorMessage ? 'form-control is-invalid' : 'form-control'}
                        placeholder="name..."
                        type="text" 
                        name="name" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {nameErrorMessage}
                    </div>
                </div>

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

                <div className="form-group">
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <input 
                        className={passwordConfirmationErrorMessage ? 'form-control is-invalid' : 'form-control'}
                        placeholder="confirm password..."
                        type="password" 
                        name="passwordConfirmation" 
                        id="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {passwordConfirmationErrorMessage}
                    </div>
                </div>

                <button 
                    className="btn btn-primary" 
                    type="submit" 
                    style={{minWidth: '100px'}}
                    disabled={ userState.loading ? true : false }
                >
                    { authState.loading ? <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" /> : 'Register' } 
                </button>
            </form>
            
        </div>
    </div>
}
export default Register;