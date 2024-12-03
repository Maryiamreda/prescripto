import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from '../assets/assets_frontend/assets'
import { Doctor } from "../Doctors";
import Verified from '../assets/assets_frontend/verified_icon.svg';
import Info from '../assets/assets_frontend/info_icon.svg';

const Appointments = () => {
    const { doctorId } = useParams<{ doctorId: string }>();

    const [doctor, setDoctor] = useState<Doctor | null>(null)
    useEffect(() => {

        setDoctor(doctors.find((data) => data._id === doctorId) || null);
    }, [doctorId]);
    return (<div>


        <div className="mt-5">
            <div className="flex gap-5 ">
                <img src={doctor?.image} className="bg-primary sm:max-w-72 rounded-lg " alt={doctor?.name} />
                <div className="text-start rounded-lg p-8  border border-[#ADADAD]">
                    <div className="flex gap-2 text-3xl font-medium text-gray-700 ">
                        <h1>{doctor?.name}</h1>
                        <img src={Verified} className="w-5" />
                    </div>
                    <div className="flex mt-1 gap-2 text-gray-600">
                        <h3 className="">{doctor?.degree} - {doctor?.speciality}</h3>

                        <div className="text-xs flex items-center rounded-xl px-2  border border-gray-200 cursor-pointer">{doctor?.experience}</div>
                    </div>
                    <div>
                        <div className="flex gap-1 mt-2">
                            <h3>About</h3>
                            <img src={Info} className="w-3 text-sm" /></div>
                        <p className="text-gray-600 text-sm mt-1 max-w-[700px] leading-relaxed">{doctor?.about}</p>
                    </div>
                    <h1 className=" text-gray-700 font-medium mt-5">Appointment fee: <span className="text-black">${doctor?.fees}</span></h1>

                </div>
            </div>

        </div>
    </div>);
}
export default Appointments;