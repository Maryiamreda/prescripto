import Image from '../assets/assets_frontend/about_image.png';
const About = () => {
    return (

        <div className='text-gray-500 text-start text-sm mb-40'>
            <h1 className='text-center text-2xl pt-10 text-[#707070]'>ABOUT <span className='text-gray-700 font-semibold'>US</span></h1>
            <div className='flex flex-col md:flex-row gap-12 my-10 '>
                <img src={Image} className='w-full  md:w-[360px]' />
                <div className='flex flex-col text-start justify-center gap-8 '>
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs <br /> conveniently and efficiently. At Prescripto, we understand the challenges individuals face <br /> when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to <br /> enhance our platform, integrating the latest advancements to improve user experience <br />and deliver superior service. Whether you're booking your first appointment or<br /> managing ongoing care, Prescripto is here to support you every step of the way.</p>
                    <h3 className='text-gray-800 font-bold text-start'>Our Vision</h3>
                    <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. <br />We aim to bridge the gap between patients and healthcare providers, making it easier for <br /> you to access the care you need, when you need it.</p>
                </div>
            </div>
            <h1 className='text-black text-xl my-4'>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></h1>
            <div className='flex md:flex-row flex-col  text-gray-600 '>
                <div className='border border-gray-200  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>EFFICIENCY:</b>
                    <p>Streamlined appointment <br />scheduling that fits into your busy<br /> lifestyle.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer border-gray-200'>
                    <b>CONVENIENCE:</b>
                    <p>Access to a network of trusted<br /> healthcare professionals in your<br /> area.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer border-gray-200'>
                    <b>PERSONALIZATION:</b>
                    <p>Tailored recommendations and<br /> reminders to help you stay on top of<br /> your health.</p>
                </div>
            </div>
        </div>);
}

export default About;