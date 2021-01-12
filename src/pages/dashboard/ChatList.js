
import { useEffect, useMemo, useState } from "react";
import { fetchMessages } from "../../actions/message.action";
import { useMessageContext } from "../../contexts/messages.context";
import { useAuthContext } from '../../contexts/auth.context';

const YourMessage = ({ message }) => {
  return (
    <>
      <div className="media media-chat media-chat-reverse">
        <img
          className="avatar"
          src="https://img.icons8.com/color/36/000000/administrator-male.png"
          alt="..."
        />
        <div className="media-body">
          <p>{message.content}</p>
          <p className="meta">
            <time dateTime="2018">23:58</time>
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
        <div className="media-body">
          <p>{message.content}</p>
          <p className="meta">
            <time dateTime="2018">00:06</time>
          </p>
        </div>
      </div>
    </>
  );
};

const ChatList = () => {

  const { authState } = useAuthContext();
  const { messageState, messageDispatch } = useMessageContext();

  useEffect(() => {
    fetchMessages(messageDispatch).catch((error) => {
      console.log(error)
    })
  }, [])

  const formattedMessages = useMemo(() => {
    const messages = messageState.messages;
    if (messages === '') return [];
    return [...messages].reverse();

  }, [messageState.messages])

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
