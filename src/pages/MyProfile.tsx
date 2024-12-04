import { useState } from "react";
import ProfilePic from '../assets/assets_frontend/profile_pic.jpg';
const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: "cookie",
        image: ProfilePic,
        email: "cookie@gmail.com",
        phone: '+12345',
        address: {
            line1: "245 East 73rd Street",
            line2: "Apartment 4A",

        },
        gender: "female",
        dob: 'May 4, 1929'

    })
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm text-start">
            <img className="w-36 rounded" src={userData.image} />
            {
                isEdit ?
                    <input
                        className="bg-gray-50 text-3xl font-medium max-w-60"
                        type="text"
                        value={userData.name}
                        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                    />
                    :
                    <p className="font-medium text-3xl  text-neutral-800 mt-4">{userData.name}</p>

            }
            <hr className="bg-zinc-400 h-[1px] border-none" />
            <div>
                <h2>CONTACT INFORMATION</h2>
                <div>
                    <h3>Email id:</h3>
                    <p>{userData.email}</p>
                </div>
                <div>
                    <h3>Phone:</h3>
                    {
                        isEdit ?
                            <input
                                className="bg-gray-50 text-3xl font-medium max-w-60"

                                type="text"
                                value={userData.phone}
                                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                            :
                            <p>{userData.phone}</p>
                    }

                </div>
                <div>
                    <h3>Address:</h3>
                    {
                        isEdit ?
                            <div>
                                <input
                                    className="bg-gray-50 text-3xl font-medium max-w-60"

                                    type="text"
                                    value={userData.address.line1}
                                    onChange={e => setUserData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line1: e.target.value
                                        }
                                    }))}
                                />
                                <br />
                                <input
                                    className="bg-gray-50 text-3xl font-medium max-w-60"

                                    type="text"
                                    value={userData.address.line2}
                                    onChange={e => setUserData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line2: e.target.value
                                        }
                                    }))}
                                />
                            </div>
                            :
                            <p>
                                {userData.address.line1}
                                <br />
                                {userData.address.line2}
                            </p>
                    }
                </div>
            </div>
            <div>
                <h2>BASIC INFORMATION</h2>
                <div>
                    <h3>Gender:</h3>
                    {
                        isEdit ?
                            <select
                                value={userData.gender}
                                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>

                            :
                            <p>{userData.gender}</p>
                    }

                </div>
                <div>
                    <h3>Birthdaydate:</h3>
                    {
                        isEdit ?
                            <input
                                className="bg-gray-50 text-3xl font-medium max-w-60"

                                type="text"
                                value={userData.dob}
                                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                            />
                            :
                            <p>{userData.dob}</p>
                    }

                </div>
            </div>
            <div>
                {isEdit ? <button onClick={() => setIsEdit(false)}>save information</button> : <button onClick={() => setIsEdit(true)}>Edit</button>}
            </div>
        </div>
    );
}

export default ProfilePage;
