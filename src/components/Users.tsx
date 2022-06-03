import React, { useEffect, useState } from 'react';
import UserModel from '../types/UserModel';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    };
    return (
        <div>
            <h2>My Users</h2>
            <h2>Team size : {team.length}</h2>
            {/* <User name="Zaheer" age={24} addUSer={handleUser}></User> */}
            {
                users.map(user => <User user={user} addUSer={handleUser}></User>)
            }
        </div>
    );
};

export default Users;