import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from '../assets/assets_frontend/assets'
import { Doctor } from "../Doctors";

const Appointments = () => {
    const { doctorId } = useParams<{ doctorId: string }>();

    const [doctor, setDoctor] = useState<Doctor | null>(null)
    useEffect(() => {

        setDoctor(doctors.find((data) => data._id === doctorId) || null);
    }, [doctorId]);
    return (<div>
        {doctor ? (
            <div>
                <img src={doctor.image} alt={doctor.name} />
                <h1>{doctor.name}</h1>
            </div>
        ) : (
            <p>Doctor not found</p>
        )}
    </div>);
}

export default Appointments;