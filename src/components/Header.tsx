import HeaderImg from '../assets/assets_frontend/header_img.png'
import Arrow from '../assets/assets_frontend/arrow_icon.svg'
import Grouprofile from '../assets/assets_frontend/group_profiles.png'
const Header = () => {
    return (
        <div className="bg-primary px-10 md:px-20 md:h-[78vh]  md:flex md:flex-row flex-col  mt-5 rounded-lg">
            <div className=' flex flex-col items-center md:relative md:top-24  md:items-start gap-5  pt-7 '>
                <p className='text-white text-3xl md:text-5xl font-semibold  text-start md:leading-tight'>Book Appointment<br />
                    With Trusted Doctors</p>
                <div className='flex flex-col items-center md:flex-row gap-3'>
                    <img src={Grouprofile} className='w-32 h-12' />
                    <div className='text-white text-sm text-start'>Simply browse through our extensive list of trusted
                        doctors,   <br />
                        schedule your appointment hassle-free.</div>
                </div>
                <a href='#speciality' className='flex text-gray-600 bg-white text-sm w-48 justify-center px-2 py-3 items-center gap-2 rounded-3xl'><p>Book appointment</p><img src={Arrow} className='w-3' /></a>
            </div>
            <div className='flex items-end md:flex-end '>
                <img src={HeaderImg} className='w-96 md:w-[32rem]' alt="" />
            </div>

        </div>);
}

export default Header;