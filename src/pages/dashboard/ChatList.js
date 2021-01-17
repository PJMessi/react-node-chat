import { useEffect, useMemo, useRef } from "react";
import { fetchMessages } from "../../actions/message.action";
import { useMessageContext } from "../../contexts/messages.context";
import { useAuthContext } from '../../contexts/auth.context';
import { YourMessage, TheirMessage } from './SingleMessage';

const ChatList = () => {

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
    
  }, [messageDispatch]);

  const formattedMessages = useMemo(() => {
    const messages = messageState.messages;
    if (messages === '') return [];

    return [...messages].reverse();

  }, [messageState.messages]);

  return <>
    <div className="content" id="content" ref={messageBox}>
      <div className="container">
        <div className="col-md-12">
          {
            formattedMessages.map(message => {
              if (message.user.uuid === authState.user.uuid) {
                return <YourMessage key={message.uuid} message={message}/>
              }
              return <TheirMessage key={message.uuid} message={message}/>
            })
          }
        </div>
      </div>
    </div>
  </>
};

export default ChatList;
