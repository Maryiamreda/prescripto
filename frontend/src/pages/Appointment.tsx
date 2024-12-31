import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Doctor } from "../Doctors";
import Verified from '../assets/assets_frontend/verified_icon.svg';
import Info from '../assets/assets_frontend/info_icon.svg';
import Relatedoctors from "../components/Relatedoctors";
import { AppContext } from "../context/AppContext";

const Appointments = () => {
    const { doctors } = useContext(AppContext);

    const { doctorId } = useParams<{ doctorId: string }>();
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [doctor, setDoctor] = useState<Doctor | null>(null)
    const [doctorSlots, setDoctorSlots] = useState<Array<{ datetime: Date; time: string }[]>>([]);
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const getAvailableSlots = async () => {
        setDoctorSlots([])

        let today = new Date(); //The new Date() constructor creates a new Date object.

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i) //getDate() returns the day of the month (from 1 to 31) of a date:
            //setDate() sets the day of the month of a date.

            //setting end time of the date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0) //setHours() can set the hour, the minute, and the second of a date object:

            //setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getHours() > 30 ? 30 : 0)
                // the start time is adjusted to be no earlier than 10:00 AM.
                // If the current time is already past 10:00 AM, it moves to the next available hour.

            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)

            }
            let timeSlots = []
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                //returns the time portion of a date object as a string, using locale conventions.
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
    useEffect(() => { console.log(doctorSlots) }, [doctorSlots])
    return (
        <div className=" ">
            <div className="mt-5 ">
                <div className="flex flex-col md:flex-row gap-5 ">
                    <img src={doctor?.image} className="bg-primary sm:max-w-72 rounded-lg " alt={doctor?.name} />
                    <div className="flex-1  border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                        <div className="flex md:justify-start gap-2 text-3xl font-medium text-gray-700 ">
                            <h1>{doctor?.name}</h1>
                            <img src={Verified} className="w-5" />
                        </div>
                        <div className="flex md:justify-start mt-1 gap-2 text-gray-600">
                            <h3 className="">{doctor?.degree} - {doctor?.specialty}</h3>

                            <div className="text-xs flex items-center rounded-xl px-2  border border-gray-200 cursor-pointer">{doctor?.experience}</div>
                        </div>
                        <div >
                            <div className="flex gap-1 mt-2">
                                <h3>About</h3>
                                <img src={Info} className="w-3 text-sm" /></div>
                            <p className="text-gray-600 text-start text-sm mt-1 max-w-[700px] leading-relaxed">{doctor?.about}</p>
                        </div>
                        <h1 className=" text-gray-700 text-start font-medium mt-5">Appointment fee: <span className="text-black">${doctor?.fees}</span></h1>

                    </div>
                </div>
                <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656] overflow-x-hidden">
                    <div>
                        <h3 className="text-start">Booking slots</h3>
                        <div className="flex gap-3 items-center w-full overflow-x-auto scrollbar-hidden  mt-4">
                            {doctorSlots.length &&
                                doctorSlots.map((item, index) => (
                                    <div
                                        onClick={() => setSlotIndex(index)}
                                        className={`cursor-pointer text-center py-6 min-w-16 rounded-full ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200 text-gray-700'}`}
                                        key={index}
                                    >
                                        <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                        <p>{item[0] && item[0].datetime.getDate()}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="flex overflow-x-auto gap-3 whitespace-nowrap scrollbar-hidden mt-4">
                        {doctorSlots.length &&
                            doctorSlots[slotIndex].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSlotTime(item.time)}
                                >
                                    <p className={`flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-sm 
                                        ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}>
                                        {item.time.toLowerCase()}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <button className=" flex bg-primary text-white text-sm font-light px-14 py-3  rounded-full my-6">Book an Appointment</button>
                </div>
            </div>

            <Relatedoctors doctorId={doctorId} speciality={doctor?.specialty} />
        </div>);
}
export default Appointments;