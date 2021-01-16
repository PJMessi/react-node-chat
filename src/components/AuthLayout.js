import { Switch } from "react-router-dom";
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import AppRoute from "./AppRoute";

const AuthLayout = () => {
  return (
    <>
      <Switch>
        <AppRoute path="/login" component={Login} isPrivate={false}></AppRoute>

        <AppRoute
          path="/register"
          component={Register}
          isPrivate={false}
        ></AppRoute>
      </Switch>
    </>
  );
};

export default AuthLayout;
