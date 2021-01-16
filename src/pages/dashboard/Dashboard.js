import './Dashboard.css';
import MessageBox from './MessageBox';
import ChatList from './ChatList';
import UserList from './UserList';

const Dashboard = ({ socket }) => {
  
  return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">

            <div className="col-md-6">
              <div className="card card-bordered">
                <div className="card-header">
                  <h4 className="card-title">
                    <strong>Chat</strong>
                  </h4>
                </div>
                <div className="ps-container ps-theme-default ps-active-y pj-chatbox" id="chat-content" >
                  <UserList />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-bordered">
                <div className="card-header">
                  <h4 className="card-title">
                    <strong>Chat</strong>
                  </h4>
                </div>
                <ChatList />
                <MessageBox socket={socket} />
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default Dashboard;
