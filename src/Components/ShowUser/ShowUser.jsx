import React, { useState } from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowUser = ({ use, ind, setUser, user }) => {
    const { _id, title, day, formattedDate, formatHour, isCompleted } = use;

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire('Data DELETE')
                const remainder = user.filter(use => use._id !== id)
                setUser(remainder)
            })
    }
    const handleStatus = (id) => {
        fetch(`http://localhost:5000/status/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newData = use.map((mp) => mp._id === id ? { ...use, isCompleted: true } : use)
                Swal.fire('❤️❤️Status Update❤️❤️')
            })
    }

    return (
        <>
            <tr>
                <td>{ind + 1}</td>
                <td>{title}</td>
                <td>{day}</td>
                <td>{formattedDate}</td>
                <td>{formatHour}</td>
                <td>
                    <div className="flex gap-4">
                        {" "}
                        <button onClick={() => handelDelete(_id)} className="bg-pink-500 px-4 py-2 rounded text-white">
                            <FaTrash className=""></FaTrash>
                        </button>
                        <button className="bg-pink-500 px-4 py-2 rounded text-white">
                            <Link to={`/update/${_id}`}>
                                {" "}
                                <FaFile />
                            </Link>
                        </button>
                        <button onClick={() => handleStatus(_id)} className="bg-pink-500 px-4 py-2 rounded text-white">
                            {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ShowUser;