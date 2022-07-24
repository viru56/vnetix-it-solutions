import { LocationMarkerIcon, PhoneIcon, ChatAltIcon } from '@heroicons/react/outline';
function Contact() {
  return (
    <div name="contact" className='w-full flex items-center flex-col py-16 border-t-2 border-sky-800 bg-sky-200'>
      <h1 className='text-4xl mt-4 font-semibold'>Connect With Us</h1>
      <div className='grid md:grid-cols-3 m-auto max-w-[1240px] py-16 gap-12'>
        <div className="max-w-sm rounded shadow-xl m-4">
          <div className='flex flex-col justify-around items-center w-full p-6'>
            <LocationMarkerIcon className='w-20' />
            <p className='pt-2 text-slate-900 uppercase text-xl text-semibold'>Address</p>
            <p className='pt-2 text-sm'>Head Office</p>
            <div className=' text-bold text-center'>
              <p className='pt-2'>123, first floor</p>
              <p className='pt-2 '>krol bagh, gaffer market</p>
              <p className='pt-2'>new Dehli, 110012</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded shadow-xl m-4">
          <div className='flex flex-col justify-around items-center w-full p-6'>
            <PhoneIcon className='w-20' />
            <p className='pt-2 text-slate-900 uppercase text-xl text-semibold'>Phone</p>
            <p className='pt-2 text-sm'>Customer Care</p>
            <p className='pt-2 text-xl text-bold'>+91 9876543210</p>
            <p className='pt-2 text-sm'>Head Office</p>
            <p className='pt-2 text-xl text-bold'>+91 9876543210</p>
          </div>
        </div>
        <div className="max-w-sm rounded shadow-xl m-4">
          <div className='flex flex-col justify-around items-center w-full p-6 '>
            <ChatAltIcon className='w-20' />
            <p className='pt-2 text-slate-900 uppercase text-xl text-semibold'>Email</p>
            <p className='pt-2 text-sm'>Customer Care</p>
            <p className='pt-2 text-xl text-bold'>customer_care@vnetix.com</p>
            <p className='pt-2 text-sm'>Support</p>
            <p className='pt-2 text-xl text-bold'>support@vnetix.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact