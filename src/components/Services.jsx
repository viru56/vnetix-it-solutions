import { CogIcon } from '@heroicons/react/outline';
function Services() {
  const servicesList = [{
    title: 'Microsoft Dynamics 365 Product Development',
    description: 'VNETIX offers services for different customers, from the small businesses to enterprise-level, building products on Dynamics 365 CE platform. Our team expertise in Sales, Service, Field Service, Power BI and Dynamics 365 Marketing. Our team can help you build cost effective and optimized portals using Dynamics 365 xRM capabilities and Power Pages.'
  }, {
    title: 'Web Development',
    description: 'We provide end-to-end product development using Microsoft Development Stack in the shortest possible duration Hybrid Agile Development Methodology.'
  }, {
    title: 'Support',
    description: 'We have a dedicated team to offer round the clock customer service, ensuring the systems are operational 24/7 and the businesses do not lose out their revenue due to down time.'
  }]
  return (
    <div name="services" className='py-16 w-full flex items-center flex-col border-t-2 border-b-2 border-sky-800 bg-sky-200'>
      <h1 className='text-4xl mt-4 font-semibold'>Services</h1>
      <div className='grid  md:grid-cols-3 sm:grid-cols-2 m-auto max-w-[1240px] pb-16'>
        {
          servicesList.map((item, index) => (
            <div key={index} className='shadow-md m-4'>
            <div className='flex flex-col justify-around md:items-start w-full p-4'>
              <CogIcon className='w-14' />
              <p className='text-md max-w-screen-sm font-semibold'>{item.title}</p>
              <p className='max-w-screen-sm text-sm'>{item.description}</p>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services