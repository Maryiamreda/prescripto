import { useNavigate } from 'react-router-dom';
import Image from '../assets/assets_frontend/appointment_img.png';
const Banner = () => {
    //  md:h-[60vh] justify-between md:flex md:flex-row flex-colpx-6 sm:
    const navigate = useNavigate();

    return (
        <div className="bg-primary  rounded-lg  md:h-[311px] sm:px-10 md:px-10  my-20 flex justify-between">

            <div className='flex-1 py-8 pl-[25px] md:py-20' >
                <h1
                    className='text-white sm:text-2xl text-xl md:text-3xl font-bold text-start md:leading-relaxed'
                >Book Appointment
                    <br />
                    With 100+ Trusted Doctors</h1>
                <a onClick={() => navigate('/login')}
                    className='flex text-gray-600 bg-white w-40  text-sm justify-center px-8 py-3 mt-8 items-center rounded-full hover:cursor-pointer hove:scale-105 transition-all'
                ><p>Create account</p></a>

            </div>
            {/* //md:w-[35%] */}
            <div className="hidden lg:block lg:w-[35%] relative">
                <img src={Image} className='w-full absolute bottom-0 right-0 max-w-md' />

            </div>


        </div>
    );
}

export default Banner;
