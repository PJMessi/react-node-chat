import './dashboard.css';
import MessageBox from './MessageBox';
import ChatList from './ChatList';

const Dashboard = () => {
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-bordered">

                <div className="card-header">
                  <h4 className="card-title">
                    <strong>Chat</strong>
                  </h4>
                </div>
                
                <ChatList/>

                <MessageBox/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
