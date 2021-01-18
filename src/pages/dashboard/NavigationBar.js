import { useAuthContext } from '../../contexts/auth.context';
import { logout } from '../../actions/auth.action';
import UserList from './UserList';

const NavigationBar = () => {
  const { authState, authDispatch } = useAuthContext();

  const triggerLogout = (e) => {
    e.preventDefault();
    logout(authDispatch);
  };

  return <>
    <div className="navigation">
      <div className="container">
        <div className="inside">
          <div className="nav nav-tab menu">

            <button className="btn">
              <img
                className="avatar-xl"
                src="dist/img/avatars/avatar-male-1.jpg"
                alt={authState.user.name}
                title={authState.user.name}
              />
            </button>

            {/* <a href="#members" data-toggle="tab">
              <i className="material-icons">account_circle</i>
            </a> */}

            <a href="#discussions" data-toggle="tab" className="active f-grow1">
              <i className="material-icons active">chat_bubble_outline</i>
            </a>

            {/* <a href="#notifications" data-toggle="tab" className="f-grow1">
              <i className="material-icons">notifications_none</i>
            </a> */}

          
            <button className="btn power" onClick={(e) => triggerLogout(e)}>
              <i className="material-icons">power_settings_new</i>
            </button>

          </div>
        </div>
      </div>
    </div>
  
    <div className="sidebar" id="sidebar">
      <div className="container">
        <div className="col-md-12">
          <div className="tab-content">
            
            <UserList/>

   
          </div>
        </div>
      </div>
    </div>
  </>
};

export default NavigationBar;
