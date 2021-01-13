import { useEffect, useMemo, useState, useRef } from "react";
import { fetchMessages } from "../../actions/message.action";
import { useMessageContext } from "../../contexts/messages.context";
import { useAuthContext } from '../../contexts/auth.context';
import { insertMessage } from '../../actions/message.action';
import { YourMessage, TheirMessage } from './SingleMessage';

const ChatList = ({ socket }) => {

  let messageBox = useRef(null);
  const { authState } = useAuthContext();
  const { messageState, messageDispatch } = useMessageContext();
  const scrollToBottomOfMessage = () => {
    messageBox.current.scrollTop = messageBox.current.scrollHeight
  }

  useEffect(() => {
    scrollToBottomOfMessage();
  }, [messageState.messages]);

  useEffect(() => {
    fetchMessages(messageDispatch)
    .then(() => { scrollToBottomOfMessage(); })
    .catch((error) => { console.log(error); });
  }, []);

  useEffect(() => {
    socket.on('chat-message', (message) => {
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
      <div className="ps-container ps-theme-default ps-active-y pj-chatbox" id="chat-content" ref={messageBox} >

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
