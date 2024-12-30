import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doctors } from '../assets/assets_frontend/assets'
import { specialityData } from '../assets/assets_frontend/assets'
import { AppContext } from "../context/AppContext";

const DoctorsPage = () => {
    const { doctors } = useContext(AppContext);
    console.log("Doctors from context:", doctors);

    const { speciality } = useParams(); // Extract docId
    const [data, setData] = useState(doctors)
    const [showFilters, setShowFilters] = useState(false)
    useEffect(() => {
        if (speciality) {
            // Filter doctors by speciality
            setData(doctors.filter((doctor) => doctor.speciality === speciality));
        } else {
            // Reset to all doctors if no speciality is selected
            setData(doctors);
        }
    }, [speciality, doctors]); // Added doctors as dependency

    return (
        <div className=" text-gray-600   mb-20">
            <p className="text-start mt-5">Browse through the doctors specialist. </p>
            <div className="md:flex-row  flex flex-col  gap-5 mt-5">
                <div className=" flex-col text-start gap-4 sm:flex text-sm  text-gray-600">
                    <button onClick={() => { setShowFilters(showFilters ? false : true) }} className="cursor-pointer border w-14 py-1 px-3 text-center  border-gray-300 block md:hidden ">Filters</button>

                    {(showFilters || window.innerWidth >= 768) && ( // Show based on state or screen size
                        <div className="flex-col flex text-start gap-4" >
                            {specialityData.map((data, index) => (
                                <Link key={index} to={`/doctors/${data.speciality}`}>
                                    <div className="cursor-pointer border pl-3 w-[94vw] sm:w-auto border-gray-300 pr-16 py-1.5 rounded">
                                        {data.speciality}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}







                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {data && data.map((doctor, index) => (
                        <Link
                            to={`/appointments/${doctor._id}`}
                            onClick={() => { window.scrollTo(0, 0); }}
                            key={`doctor-${doctor._id || index}`}
                            className='border border-blue-200 overflow-hidden w-fit rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        >
                            <img
                                className='bg-blue-50'
                                src={doctor.image}
                                alt={`Dr. ${doctor.name}`}
                            />
                            <div className='px-5 py-2 text-start'>
                                <div className='flex items-center text-center gap-2'>
                                    <p className='bg-green-500 rounded-full w-2 h-2'></p>
                                    <p className='text-green-500 text-sm'>Available</p>
                                </div>
                                <h2 className='text-base font-semibold'>{doctor.name}</h2>
                                <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
                            </div>
                        </Link>
                    ))}</div>
            </div>

        </div>);
}

export default DoctorsPage;