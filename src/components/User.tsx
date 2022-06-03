import React, { FC } from 'react';
import UserModel from '../types/UserModel';


// interface Props {
//     name: string,
//     age: number,
//     addUSer: () => void;
// };
interface Props {
    user: UserModel,
    addUSer: (user: UserModel) => void;
}

const User: FC<Props> = ({ user, addUSer }) => {
    return (
        <div>

            <h2>Hello from :{user.name} , email: {user.email}</h2>
            <button onClick={() => addUSer(user)}>Add Me</button>
        </div>
    );
};

export default User;