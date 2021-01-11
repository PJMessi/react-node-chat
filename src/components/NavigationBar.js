import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth.context';

const NavigationBar = () => {

  const { authState, authDispatch } = useAuthContext();

  const logout = (e) => {
    e.preventDefault();
    
    authDispatch({ type: 'LOGOUT' });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        CHAT
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto navbar-right">

          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/payment">
              Payment
            </NavLink>
          </li>      
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {authState.user.name}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" onClick={(e) => logout(e)}>Logout</a>
              {/* <div className="dropdown-divider"></div> */}
            </div>
          </li>
      
        </ul>

      </div>
    </nav>
  );
};

export default NavigationBar;
