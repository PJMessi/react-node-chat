const YourMessage = () => {
  return (
    <>
      <div className="media media-chat">
        <img
          className="avatar"
          src="https://img.icons8.com/color/36/000000/administrator-male.png"
          alt="..."
        />
        <div className="media-body">
          <p>Hi</p>
          <p>How are you ...???</p>
          <p>
            What are you doing tomorrow?
            <br /> Can we come up a bar?
          </p>
          <p className="meta">
            <time dateTime="2018">23:58</time>
          </p>
        </div>
      </div>
    </>
  );
};

const TheirMessage = () => {
  return (
    <>
      <div className="media media-chat media-chat-reverse">
        <div className="media-body">
          <p>Hiii, I'm good.</p>
          <p>How are you doing?</p>
          <p>Long time no see! Tomorrow office. will be free on sunday.</p>
          <p className="meta">
            <time dateTime="2018">00:06</time>
          </p>
        </div>
      </div>
    </>
  );
};

const ChatList = () => {
  return (
    <>
      <div className="ps-container ps-theme-default ps-active-y pj-chatbox" id="chat-content" >
        <YourMessage/>

        <div className="media media-meta-day">Today</div>

        <TheirMessage/>
        
      </div>
    </>
  );
};

export default ChatList;
