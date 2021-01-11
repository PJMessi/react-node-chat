import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth.context';

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {
    let { authState } = useAuthContext();

    return (

        <Route
        
            path={path}

            render={(props) => {

                if (isPrivate && !authState.user) {
                    return <Redirect to={{ pathname: '/login' }}/>
                }

                if (path === '/login' && authState.user) {
                    return <Redirect to={{ pathname: '/' }}/>
                }

                return <Component {...props}/>

            }}

            {...rest}

        />

    )

}

export default AppRoute;