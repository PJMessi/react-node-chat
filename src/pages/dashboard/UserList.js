import { useUserContext } from "../../contexts/user.context";
import { fetchUsers, updateUserStatus } from '../../actions/user.action';
import { useEffect, useMemo } from "react";
import { useAuthContext } from "../../contexts/auth.context";

const UserList = ({ socket }) => {

    const { authState } = useAuthContext();
    const { userState, userDispatch } = useUserContext();
    
    useEffect(() => {
        fetchUsers(userDispatch);
    }, []);

    useEffect(() => {
        socket.on('user-status-change', (user) => {
            updateUserStatus(userDispatch, user);
        })
    }, []);


    const filteredUser = useMemo(() => {
        if (userState.users == '') return [];
        return userState.users.filter(user => user.uuid !== authState.user.uuid)
    }, [userState.users])

    return <>
        <ul className="list-group">
            {
                filteredUser.map(user => {
                    return <li key={user.uuid} className="list-group-item">
                        { user.name } 
                        {
                            user.status == 'ACTIVE' ?
                                <span className="badge badge-success float-right" >Online</span> :
                                <span className="badge badge-secondary float-right" >Offine</span>
                        }
                    </li>
                })
            }
        </ul>
                
    </>
}

export default UserList;