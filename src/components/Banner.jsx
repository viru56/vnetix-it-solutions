import React from 'react'

function Banner() {
  return (
    <div name="home" className='h-screen w-full border-b-2 border-sky-800 bg-sky-200 flex items-center justify-between'>
    <div className='p-4 w-full min-h-[250px]'>
      <div className='flex justify-center items-center flex-col text-center'>
        <p className='max-w-screen-md text-2xl'>
        <span className='text-3xl'>VNETIX</span> provides technology and business process consulting services, with a focus on Microsoft Technologies. 
        We specialize in large and complex implementations where customers want to leverage Dynamics 365 as a strategy to transform their businesses. 
        We provide customized solutions as per the needs of the customer to help them succeed in their business. 
        </p>
      </div>
    </div>
    </div>
  )
}

export default Banner;
