import moment from 'moment';

const timefilter = (timestamp) => {
  return moment(timestamp).format('MMMM Do YYYY, h:mm a');
};

export const YourMessage = ({ message }) => {
  return <>
    <div className="message me">
      <div className="text-main">
        <div className="text-group me">
          <div className="text me">
            <p>{message.content}</p>
          </div>
        </div>
        <span>{timefilter(message.createdAt)}</span>
      </div>
    </div>
  </>
};

export const TheirMessage = ({ message }) => {
  return <>
    <div className="message">
      <img 
        className="avatar-md" 
        src="dist/img/avatars/avatar-female-5.jpg" 
        data-toggle="tooltip" 
        data-placement="top" 
        title={message.user.name} 
        alt={message.user.name}
      />
      <div className="text-main">
        <div className="text-group">
          <div className="text">
            <p>{message.content}</p>
          </div>
        </div>
        <span>{timefilter(message.createdAt)}</span>
      </div>
    </div>
  </>
};
