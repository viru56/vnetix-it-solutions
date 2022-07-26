import aboutusImg from '../assets/aboutus.png';
function AboutUs() {
  return (
    <div name="about"  className=' py-8 w-full flex items-center flex-col'>
      <h1 className='text-4xl mt-4 font-semibold'>About us</h1>
      <div className='grid md:grid-cols-2  m-auto pb-16 gap-8 py-16'>
        <div className='flex flex-col justify-center md:items-start w-full px-2'>
        <p className='text-xl max-w-screen-sm'>Vnetix provides technology and business process consulting services to enterprise and mid-sized companies, with a focus on Microsoft Dynamics 365.
          We specialize in large and complex implementations where customers want to leverage Dynamics 365 as a strategy to transform their businesses.
           We provide customized solutions as per the needs of the customer to help them succeed in their business.
           </p>
        </div>
        <div className='flex justify-center sm:pt-8'>
          <div className='max-w-[250px] max-h-[250px]'>
         <img src={aboutusImg} alt="/" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs