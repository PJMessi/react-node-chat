const ChatList = () => {
  return (
    <>
      <div
        className="ps-container ps-theme-default ps-active-y pj-chatbox"
        id="chat-content"
      >
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
        <div className="media media-meta-day">Today</div>
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
        <div className="media media-chat">
          <img
            className="avatar"
            src="https://img.icons8.com/color/36/000000/administrator-male.png"
            alt="..."
          />
          <div className="media-body">
            <p>Okay</p>
            <p>We will go on sunday? </p>
            <p className="meta">
              <time dateTime="2018">00:07</time>
            </p>
          </div>
        </div>
        <div className="media media-chat media-chat-reverse">
          <div className="media-body">
            <p>That's awesome!</p>
            <p>I will meet you Sandon Square sharp at 10 AM</p>
            <p>Is that okay?</p>
            <p className="meta">
              <time dateTime="2018">00:09</time>
            </p>
          </div>
        </div>
        <div className="media media-chat">
          <img
            className="avatar"
            src="https://img.icons8.com/color/36/000000/administrator-male.png"
            alt="..."
          />
          <div className="media-body">
            <p>Okay i will meet you on Sandon Square </p>
            <p className="meta">
              <time dateTime="2018">00:10</time>
            </p>
          </div>
        </div>
        <div className="media media-chat media-chat-reverse">
          <div className="media-body">
            <p>Do you have pictures of Matley Marriage?</p>
            <p className="meta">
              <time dateTime="2018">00:10</time>
            </p>
          </div>
        </div>
        <div className="media media-chat">
          <img
            className="avatar"
            src="https://img.icons8.com/color/36/000000/administrator-male.png"
            alt="..."
          />
          <div className="media-body">
            <p>Sorry I don't have. i changed my phone.</p>
            <p className="meta">
              <time dateTime="2018">00:12</time>
            </p>
          </div>
        </div>
        <div className="media media-chat media-chat-reverse">
          <div className="media-body">
            <p>Okay then see you on sunday!!</p>
            <p className="meta">
              <time dateTime="2018">00:12</time>
            </p>
          </div>
        </div>
        <div
          className="ps-scrollbar-x-rail"
          style={{ left: '0px', bottom: '0px' }}
        >
          <div
            className="ps-scrollbar-x"
            tabIndex="0"
            style={{ left: '0px', width: '0px' }}
          ></div>
        </div>
        <div
          className="ps-scrollbar-y-rail"
          style={{ top: '0px', height: '0px', right: '2px' }}
        >
          <div
            className="ps-scrollbar-y"
            tabIndex="0"
            style={{ top: '0px', height: '2px' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
