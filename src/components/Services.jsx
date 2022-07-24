import { CogIcon } from '@heroicons/react/outline';
function Services() {
  const servicesList = [{
    title: 'First Service',
    description: 'Vnetix provides technology and business process consulting services to enterprise and mid-sized companies, with a focus on Microsoft Dynamics 365.'
  }, {
    title: 'Second Service',
    description: ' We specialize in large and complex implementations where customers want to leverage Dynamics 365 as a strategy to transform their businesses.'
  }, {
    title: 'Third Service',
    description: 'We provide customized solutions as per the needs of the customer to help them succeed in their business.'
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
              <p className='text-xl max-w-screen-sm font-semibold'>{item.title}</p>
              <p className='max-w-screen-sm'>{item.description}</p>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services