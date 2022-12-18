import AddUser from "./AddUserCard"
import User from "./UserCard"
import React, { useState } from "react";

const List = ({ users, updateUser }) => {
    return (<ol>
        {
            Object.keys(users)
                .map(username => {
                    const user = users[username];
                    return (<li key={username}><User username={username} gameCount={user.gameCount} showCount={user.showCount} updateUser={updateUser} /></li>);
                }
                )
        }
    </ol>);

};


const UserList = () => {

    const [users, setUsers] = useState({});

    const addUser = ({ username, firstname, lastname }) => {
        setUsers({ ...users, [username]: { firstname, lastname, gameCount: 0, showCount: true } });
    };
    const updateUser = ({ username, gameCount, showCount }) => {
        setUsers({ ...users, [username]: { ...users[username], gameCount, showCount } });
    };

    return (
        <div>
            <AddUser addUser={addUser} />
            <List id="list" users={users} updateUser={updateUser} ></List>
        </div>

    );

}
export default UserList;