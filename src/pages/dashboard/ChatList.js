import { useEffect, useMemo, useState } from "react";
import { fetchMessages } from "../../actions/message.action";
import { useMessageContext } from "../../contexts/messages.context";
import { useAuthContext } from '../../contexts/auth.context';
import moment from 'moment';
import io from 'socket.io-client';
import { insertMessage } from '../../actions/message.action';

const timefilter = (timestamp) => {
  return moment(timestamp).format('MMMM Do YYYY, h:mm a');
}

const YourMessage = ({ message }) => {
  return (
    <>
      <div className="media media-chat media-chat-reverse">
        <div className="media-body">
          <p>{message.content}</p>
          <p className="meta" style={{color: 'lightgrey'}}>
            <time dateTime="2018">{timefilter(message.createdAt)}</time>
          </p>
        </div>
      </div>
    </>
  );
};

const TheirMessage = ({ message }) => {
  return (
    <>
      <div className="media media-chat">
        <img
          className="avatar"
          src="https://img.icons8.com/color/36/000000/administrator-male.png"
          alt="..."
        />
        <div className="media-body">
          <p>{message.content}</p>
          <p className="meta">
            <time dateTime="2018">{timefilter(message.createdAt)}</time>
          </p>
        </div>
      </div>
    </>
  );
};

const ChatList = () => {
  const { authState } = useAuthContext();
  const { messageState, messageDispatch } = useMessageContext();

  let [socket, setSocket] = useState(io('http://127.0.0.1:5000/', {
      query: {
        token: authState.token
      }
  }))

  useEffect(() => {

    fetchMessages(messageDispatch).catch((error) => {
      console.log(error)
    });

    socket.on('chat-message', (message) => {
      console.log(message);
      insertMessage(messageDispatch, message);
    });

  }, []);

  const formattedMessages = useMemo(() => {
    const messages = messageState.messages;
    if (messages === '') return [];
    return [...messages].reverse();
  }, [messageState.messages]);


  return (
    <>
      <div className="ps-container ps-theme-default ps-active-y pj-chatbox" id="chat-content" >

        {
          formattedMessages.map(message => {
            if (message.user.uuid === authState.user.uuid) {
              return <YourMessage key={message.uuid} message={message}/>
            }
            return <TheirMessage key={message.uuid} message={message}/>
          })
        }


        {/* <div className="media media-meta-day">Today</div> */}

        
      </div>
    </>
  );
};

export default ChatList;
