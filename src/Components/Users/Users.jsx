import React from 'react';
import { FaFaceAngry, FaFaceGrinBeamSweat } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    const hendleDelete =id =>{
        console.log(id);
        fetch(`https://new-user-server-two.vercel.app/user/${id}`,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className='w-11/12 mx-auto '>
            {users.length}
            
            {
                users.map((user, index) => <div key={index} className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='cursor' onClick={() => hendleDelete(user._id)}><FaFaceGrinBeamSweat></FaFaceGrinBeamSweat></td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default Users;