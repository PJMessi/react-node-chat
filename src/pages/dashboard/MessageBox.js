import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageBox = () => {
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
      />

      <a className="publisher-btn text-info" href="#" data-abc="true">
        <FontAwesomeIcon icon={faPaperPlane} />
      </a>
      
    </div>
  );
};

export default MessageBox;
