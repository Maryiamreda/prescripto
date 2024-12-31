import { useContext, useEffect, useState } from 'react';
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.tsx';
const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [data, setData] = useState(doctors)
    useEffect(() => {

        setData(doctors);

    }, [doctors]); // Added doctors as dependency

    return (
        <div className='mt-20 text-gray-800 text-start flex flex-col md:flex-col items-center gap-6  '>
            <h2 className='text-3xl font-semibold'>Top Doctors to Book</h2>
            <p className='text-sm'>Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.slice(0, 4).map((doctor) => (
                    <div onClick={() => { window.scrollTo(0, 0); navigate(`/appointments/${doctor._id}`) }} className='border border-blue-200 w-fit overflow-hidden rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='bg-blue-50' src={doctor.image} />
                        <div className='p-5'>
                            <div className='flex items-center text-center gap-2'> <p className='bg-green-500 rounded-full w-2 h-2 '></p><p className='text-green-500 text-sm'>Available</p>
                            </div>
                            <h2 className='text-lg font-semibold'>{doctor.name}</h2>
                            <p className='text-gray-600 text-sm'>{doctor.specialty}</p>
                        </div>

                    </div>)
                )}
            </div>
            <button onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:cursor-pointer' >more</button>
        </div >
    );
}

export default TopDoctors;
