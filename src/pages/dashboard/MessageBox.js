import { useRef, useState } from 'react';

const MessageBox = ({ socket }) => {

  const [message, setMessage] = useState('');
  const submitButton = useRef(null);

  const emitMessage = async(e) => {
    e.preventDefault();
    if (message === '') return;
    await socket.emit('chat-message', message)
    setMessage('');
  }

  const handleMessageBoxChange = (e) => {
    if (e.key == 'Enter') {
      alert();

    } else {
      setMessage(e.target.value);
    }
  }

  return <>
    <div className="container">
      <div className="col-md-12">
        <div className="bottom">
          <form className="position-relative w-100" onSubmit={(e) => {emitMessage(e)}}>

            <textarea 
              className="form-control" 
              placeholder="Start typing for reply..." 
              type="text"
              value={message} 
              onChange={(e) => {setMessage(e.target.value)}} 
            />

            <button 
              ref={submitButton}
              type="submit" 
              className="btn send"
            >
              <i className="material-icons">send</i>
            </button>

          </form>
        </div>
      </div>
    </div>
  </>
};

export default MessageBox;
