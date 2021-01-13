import './Dashboard.css';
import MessageBox from './MessageBox';
import ChatList from './ChatList';
import { useMessageContext } from "../../contexts/messages.context";
import io from 'socket.io-client';
import { useAuthContext } from '../../contexts/auth.context';
import { useEffect, useRef } from 'react';
import UserList from './UserList';
import { insertMessage } from '../../actions/message.action';
import { updateUserStatus } from '../../actions/user.action';
import { useUserContext } from '../../contexts/user.context';

const Dashboard = () => {
  const {authState} = useAuthContext();
  const { userDispatch } = useUserContext();
  const { messageDispatch } = useMessageContext();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://127.0.0.1:5000/', {
      query: { token: authState.token }
    })

    socket.current.on('chat-message', (message) => {
      insertMessage(messageDispatch, message);
    });

    socket.current.on('user-status-change', (user) => {
      updateUserStatus(userDispatch, user);
    })

    return () => {
      socket.current.disconnect();
    }

  }, [])

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
                <MessageBox socket={socket.current} />
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default Dashboard;
