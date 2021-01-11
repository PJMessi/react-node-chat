import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
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
        <ul className="navbar-nav mr-auto">

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
      </div>
    </nav>
  );
};

export default NavigationBar;
