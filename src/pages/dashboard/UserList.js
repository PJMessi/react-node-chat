import { useUserContext } from "../../contexts/user.context";
import { fetchUsers } from '../../actions/user.action';
import { useEffect, useMemo } from "react";
import { useAuthContext } from "../../contexts/auth.context";

const UserList = () => {

    const { authState } = useAuthContext();
    const { userState, userDispatch } = useUserContext();
    
    useEffect(() => {
        fetchUsers(userDispatch);
    }, [userDispatch]);

    const filteredUser = useMemo(() => {
        if (userState.users === '') return [];
        return userState.users.filter(user => user.uuid !== authState.user.uuid)
    }, [userState.users, authState.user])


    return <>

        <div className="tab-pane fade active show" id="members">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="people" placeholder="Search for people..."/>
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
            </div>

            <div className="contacts">

                <div className="list-group" id="contacts" role="tablist">
                    {
                        filteredUser.map(user => {
                            return <span key={user.uuid} className="filterMembers all offline contact" style={{cursor: 'pointer'}}>
                                <img 
                                    className="avatar-md" 
                                    src="dist/img/avatars/avatar-male-4.jpg" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title={user.name} 
                                    alt={user.name}
                                />

                                <div className="status">
                                    <i 
                                        className={
                                            user.status === 'ACTIVE' ?
                                            "material-icons online" :
                                            "material-icons offline"
                                        }

                                    > fiber_manual_record </i>
                                </div>

                                <div className="data">
                                    <h5>{user.name}</h5>
                                    <p>{user.email}</p>
                                </div>

                                <div className="person-add">
                                    <i className="material-icons">person</i>
                                </div>

                            </span>
                        })
                    }
                </div>
            </div>
        </div>

    </>
}

export default UserList;