import aboutusImg from '../assets/aboutus.png';
function AboutUs() {
  return (
    <div name="about"  className=' py-8 w-full flex items-center flex-col'>
      <h1 className='text-4xl mt-4 font-semibold'>About us</h1>
      <div className='grid md:grid-cols-2  m-auto pb-16 gap-8 py-16'>
        <div className='flex flex-col justify-center md:items-start w-full px-2'>
        <p className='text-sm max-w-screen-sm'>
        <span className='text-xl'>VNETIX</span> is a Microsoft partner for software development, leading from the front to offer result-oriented software solutions for businesses. 
        It comes from our experienced team of developers and consultants dealing in solving complex business scenarios. Our team has experience in working projects around the globe and adapting to their local needs. 
        Our goal is to provide clients with end-to-end software development experience, quality assurance, and support solutions based on the latest technologies for developing business software solutions.
        <br /><br />
        Whether you’re an individual or a corporation, we have the experience and results-driven mindset that you need on your side for your Microsoft Technology Projects
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