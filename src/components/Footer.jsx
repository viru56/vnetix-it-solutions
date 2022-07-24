import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='w-full flex items-center flex-col bg-sky-200 py-4'>
      @Copyright {year}
    </div>
  )
}

export default Footer