import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const ProfilePage = () => {
    const { userData, setUserData } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)
    return userData && (
        <div className="max-w-lg mt-10 mb-36 flex  text-[#363636] flex-col gap-2 text-sm text-start">
            <img className="w-36 rounded" src={userData.image} />
            {
                isEdit ?
                    <input
                        className="bg-gray-50 text-xl font-medium max-w-60"
                        type="text"
                        value={userData.name}
                        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                    />
                    :
                    <p className="font-medium text-3xl  text-neutral-800 mt-4">{userData.name}</p>

            }
            <hr className="bg-zinc-400 h-[1px] border-none" />
            <div className="flex flex-col gap-4"  >
                <h2 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h2>
                <div className="flex gap-16">
                    <h3 className="font-medium">Email id:</h3>
                    <p className="text-blue-500">{userData.email}</p>
                </div>
                <div className="flex gap-16">
                    <h3 className="font-medium">Phone:</h3>
                    {
                        isEdit ?
                            <input
                                className="bg-gray-50 text-xl font-medium max-w-60"

                                type="text"
                                value={userData.phone}
                                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                            :
                            <p className="text-blue-400">{userData.phone}</p>
                    }

                </div>
                <div className="flex gap-16">
                    <h3 className="font-medium">Address:</h3>
                    {
                        isEdit ?
                            <div className="flex flex-col gap-2 mt-2 ">
                                <input
                                    className="bg-gray-50 text-xl font-medium max-w-60"

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

                                <input
                                    className="bg-gray-50 text-xl font-medium max-w-60"

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
                            <div className="flex flex-col gap-1">
                                <p>                                {userData.address.line1}
                                </p>

                                <p>{userData.address.line2}</p>


                            </div>
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4 text-neutral-700">
                <h2 className="text-neutral-500 underline mt-3">BASIC INFORMATION</h2>
                <div className="flex gap-16">
                    <h3 className="font-medium">Gender:</h3>
                    {
                        isEdit ?
                            <select
                                className="max-w-20 bg-gray-100"
                                value={userData.gender}
                                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>

                            :
                            <p className="text-gray-400">{userData.gender}</p>
                    }

                </div>
                <div className="flex gap-16">
                    <h3 className="font-medium">Birthdaydate:</h3>
                    {
                        isEdit ?
                            <input
                                className="bg-gray-50 text-xl font-medium max-w-60"

                                type="date"
                                value={userData.dob}
                                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                            />
                            :
                            <p className="text-gray-400">{userData.dob}</p>
                    }

                </div>
            </div>
            <div className="mt-10">
                {isEdit ? <button className="border border-primary px-8 py-2  rounded-full hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(false)}>save information</button> : <button className="border border-primary px-8 py-2  rounded-full  hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(true)}>Edit</button>}
            </div>
        </div>
    );
}

export default ProfilePage;
