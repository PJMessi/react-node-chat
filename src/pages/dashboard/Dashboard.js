import './Dashboard.css';
import MessageBox from './MessageBox';
import ChatList from './ChatList';
import NavigationBar from './NavigationBar';

const Dashboard = ({ socket }) => {
  
  return <>
    <NavigationBar/>
			
    <div className="main">
      <div className="tab-content" id="nav-tabContent">
        <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
          <div className="chat" id="chat1">

            <div className="top">
              <div className="container">
                <div className="col-md-12">
                  <div className="inside">

                    <span>
                      <img 
                        className="avatar-md" 
                        src="dist/img/avatars/avatar-female-5.jpg" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Node Js Room" 
                        alt="Node Js Room"/>
                    </span>
                    
                    <div className="status">
                      <i className="material-icons online">fiber_manual_record</i>
                    </div>

                    <div className="data">
                      <h5><span><strong>Node Js Room</strong></span></h5>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <ChatList/>
            
            <MessageBox socket={socket}/>
          
          </div>
        </div>
      </div>
    </div>

  </>
};

export default Dashboard;
