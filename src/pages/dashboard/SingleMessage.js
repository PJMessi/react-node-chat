import moment from 'moment';

const timefilter = (timestamp) => {
  return moment(timestamp).format('MMMM Do YYYY, h:mm a');
};

export const YourMessage = ({ message }) => {
  return (
    <>
      <div className="media media-chat media-chat-reverse">
        <div className="media-body">
          <p>{message.content}</p>
          <p className="meta" style={{ color: 'lightgrey' }}>
            <time dateTime="2018">{timefilter(message.createdAt)}</time>
          </p>
        </div>
      </div>
    </>
  );
};

export const TheirMessage = ({ message }) => {
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
