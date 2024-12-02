import React, { useState } from "react";

import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const formatTime12Hour = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
};

const Update = () => {
    const {id}=useParams()
    const userinfo = useLoaderData()

    // const { day, formatHour, formattedDate, title }=userinfo;
    const [title, setTitle] = useState(userinfo?.title)
    const [day, setDay] = useState(userinfo?.day)
    // const [formatHour, setFormatHour] = useState(userinfo?.formatHour)
    const [formattedDate, setformattedDate] = useState(userinfo?.formattedDate)
    console.log(formattedDate);
    const handleUpdateSchedule = () => {
        const user ={
            title: title,
            day: day,
            formattedDate: formattedDate,
            isCompleted: false,
        }
        fetch(`https://new-user-server-two.vercel.app/users/${id}`,{
            method: "PATCH", 
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        })

    };
    return (
        <div>
            <div className="bg-[#F4F3F0] lg:p-24">
                <h2 className="text-3xl text-center font-bold">Update Gym Schedule</h2>
                <form onSubmit={handleUpdateSchedule}>
                    <div className="flex gap-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input
                                type="text"
                                name="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control lg:w-1/2 mt-6 md:mt-0">
                            <label className="label font-bold">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker value={formattedDate}
                                selected={formattedDate}
                                onChange={(formattedDate) => setformattedDate(formattedDate)} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex gap-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Day</span>
                            </label>

                            <select className="input input-bordered " name="day" value={day} onChange={(e) => setDay(e.target.value)} id="day">
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                            </select>
                        </div>
                        <div className="form-control lg:w-1/2 mt-6 md:mt-0">
                            <label className="label font-bold">
                                <span className="label-text">Time</span>
                            </label>

                            <DatePicker
                                className="input input-bordered w-full"
                                readOnly
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                        </div>
                    </div>

                    {/* End of Labels */}
                    <input
                        type="submit"
                        value="Update Schedule"
                        className="btn w-full bg-pink-500 text-white mt-6"
                    />
                </form>
            </div>
        </div>
    );
};

export default Update;