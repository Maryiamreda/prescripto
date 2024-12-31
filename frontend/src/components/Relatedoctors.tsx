import { useContext, useEffect, useState } from "react";
import { Doctor } from "../Doctors";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

interface RelatedoctorsProps {
    doctorId: string | undefined;  // doctorId can be a string or undefined
    speciality?: string;
}

const Relatedoctors: React.FC<RelatedoctorsProps> = ({ doctorId, speciality }) => {
    const [relatedDocs, setRelatedDocs] = useState<Doctor[]>([]);  // Correct state type to Doctor[]
    const { doctors } = useContext(AppContext);

    useEffect(() => {
        if (speciality) {  // Ensure speciality is defined before filtering
            const docInfo = doctors.filter(
                (doc) => doc.specialty === speciality && doc._id !== doctorId
            );
            setRelatedDocs(docInfo);
        }
    }, [doctorId, speciality]);

    return (
        <div className="my-16 flex flex-col gap-4 text-[#262626]">
            <div className="flex gap-4 flex-col items-center">
                <h1 className="font-medium text-3xl">Related Doctors</h1>
                <p className="sm:w-1/3 text-sm text-center">Simply browse through our extensive list of trusted doctors.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedDocs.length > 0 &&
                    relatedDocs.slice(0, 5).map((doctor, index) => (
                        <Link to={`/appointments/${doctor._id}`} key={index} className='border w-fit border-blue-200 overflow-hidden rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500' onClick={() => window.scrollTo(0, 0)}>
                            <img className='bg-blue-50' src={doctor.image} />
                            <div className='px-5 py-2 text-start'>
                                <div className='flex items-center text-center gap-2'> <p className='bg-green-500 rounded-full w-2 h-2 '></p><p className='text-green-500 text-sm'>Available</p>
                                </div>
                                <h2 className='text-base font-semibold'>{doctor.name}</h2>
                                <p className='text-gray-600 text-sm'>{doctor.specialty}</p>
                            </div>

                        </Link>


                    ))}
            </div>

        </div>
    );
}

export default Relatedoctors;
