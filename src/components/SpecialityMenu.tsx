import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';
const SpecialityMenu = () => {
    return (
        <div className='mt-16 text-gray-800 text-center flex flex-col md:flex-col items-center gap-6'>
            <div className='text-3xl font-semibold'>Find by Speciality</div>
            <p className='text-sm  text-gray-900 '>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free. </p>
            <div className='flex   justify-center w-full md:w-auto gap-3 overflow-scroll md:overflow-visible'>
                {specialityData.map((item, index) => (
                    <Link key={index} className=" text-xs speciality-item cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex-shrink-0 " to={`/doctors/${item.speciality}`}>
                        <img src={item.image} className='w-16 sm:w-24' />
                        <h3 className=''>{item.speciality}</h3>

                    </Link>
                ))}
            </div>

        </div>

    );
}

export default SpecialityMenu;
