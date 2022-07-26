import { UserCircleIcon } from '@heroicons/react/outline';
function Testimonials() {
  const testimonalList = [{
    name: 'Alex Jones',
    description: 'Vnetix provides technology and business process consulting services to enterprise and mid-sized companies, with a focus on Microsoft Dynamics 365.'
  }, {
    name: 'Jatin Christopher',
    description: 'We specialize in large and complex implementations where customers want to leverage Dynamics 365 as a strategy to transform their businesses.'
  }, {
    name: 'Cory Mollet',
    description: 'We provide customized solutions as per the needs of the customer to help them succeed in their business.'
  }]
  return (
    <div className='w-full flex items-center flex-col py-8'>
      <h1 className='text-4xl mt-4 font-semibold'>Testimonials</h1>
      <div className='grid ld:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 m-auto max-w-[1240px] py-16'>
        {
          testimonalList.map((item, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-xl m-4">
              <div className='flex flex-col justify-center w-full p-6 pb-2'>
                <div className='flex justify-center'>
                  <UserCircleIcon className='w-20' />
                </div>
                <p className='max-w-screen-sm pt-4 min-h-[180px]'>{item.description}</p>
                <p className='text-right text-gray-400'>{item.name}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials