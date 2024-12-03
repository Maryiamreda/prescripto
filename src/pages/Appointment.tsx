import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from '../assets/assets_frontend/assets'
import { Doctor } from "../Doctors";
import Verified from '../assets/assets_frontend/verified_icon.svg';
import Info from '../assets/assets_frontend/info_icon.svg';

const Appointments = () => {
    const { doctorId } = useParams<{ doctorId: string }>();

    const [doctor, setDoctor] = useState<Doctor | null>(null)
    const [doctorSlots, setDoctorSlots] = useState<Array<{ datetime: Date; time: string }[]>>([]);
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const getAvailableSlots = async () => {
        setDoctorSlots([])
        let today = new Date();
        let allSlots = []; // Initialize an array to hold all the slots for 7 days

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            //setting end time of the date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)
            //setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)


            }
            let timeSlots = []
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                //increment currenttime by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            setDoctorSlots(prev => ([...prev, timeSlots]))
        }

    }


    useEffect(() => {
        const docInfo = doctors.find((data) => data._id === doctorId);

        setDoctor(docInfo || null);
    }, [doctorId]);

    useEffect(() => { getAvailableSlots() }, [doctor])

    return (
        <div>


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
                <div></div>

            </div>
        </div>);
}
export default Appointments;