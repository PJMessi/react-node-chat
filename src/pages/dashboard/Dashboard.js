import './Dashboard.css';
import MessageBox from './MessageBox';
import ChatList from './ChatList';
import { MessageContextProvider } from "../../contexts/messages.context";
import io from 'socket.io-client';
import { useAuthContext } from '../../contexts/auth.context';
import { useState } from 'react';
import UserList from './UserList';
import { UserContextProvider } from '../../contexts/user.context';

const Dashboard = () => {
  const {authState} = useAuthContext();

  let [socket, setSocket] = useState(io('http://127.0.0.1:5000/', {
    query: { token: authState.token }
  }))

  return (
    <MessageContextProvider>
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
                  <UserContextProvider>
                    <UserList socket={socket}/>
                  </UserContextProvider>
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
                <ChatList socket={socket}/>
                <MessageBox socket={socket}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MessageContextProvider>
  );
};

export default Dashboard;
