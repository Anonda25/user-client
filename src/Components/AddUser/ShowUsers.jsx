import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowUser from "../ShowUser/ShowUser";

const ShowUsers = () => {
    const loaderUser = useLoaderData()
    const [user, setUser] = useState(loaderUser)
    const [search , setSearch]= useState("")

    useEffect(()=>{
        fetch(`https://new-user-server-two.vercel.app/users/?sherchprams=${search}`)
        .then(res=> res.json())
        .then(data =>{
            setUser(data);
        })
    },[search])
    return (
        <>
            <div className="w-[400px] mx-auto mb-4">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="search"
                    className="input input-bordered w-full"
                    required
                />
            </div>
            <div className="w-1/2 mx-auto bg-slate-50">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>serial</th>
                                <th>Title</th>
                                <th>Day</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Auction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((use, index) => <ShowUser key={use._id}
                                    user={user}
                                    setUser={setUser}
                                    use={use}
                                    ind={index}></ShowUser>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ShowUsers;