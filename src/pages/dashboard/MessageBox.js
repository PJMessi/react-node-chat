import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MessageBox = ({ socket }) => {

  const [message, setMessage] = useState('');

  const emitMessage = async(e) => {
    e.preventDefault();
    if (message === '') return;
    await socket.emit('chat-message', message)
    setMessage('');
  }

  return (
    <div className="publisher bt-1 border-light">
      <img
        className="avatar avatar-xs"
        src="https://img.icons8.com/color/36/000000/administrator-male.png"
        alt="..."
      />

      <input
        className="publisher-input"
        type="text"
        placeholder="Write something"
        value={message}
        onChange={(e) => {setMessage(e.target.value)}}
      />

      <button className="publisher-btn text-info" data-abc="true" onClick={(e) => {emitMessage(e)}}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      
    </div>
  );
};

export default MessageBox;
