import React from 'react'

function Model({ message, open, onClose }) {
  if (!open) return null;
  const handleClick = (e) => {
    if(e.target.id === 'modal'){
      onClose();
    }
  }
  return (
    <div id="modal" onClick={handleClick} className='fixed inset-0 bg-sky-800 bg-opacity-80 flex justify-center items-center z-50'
    >
      <div className='bg-white rounded max-w-sm'>
        <div className='p-4 text-center'>{message}</div>
        <div className='text-center pt-2 pb-4'>
          <button onClick={onClose} className=' border-1 rounded-md bg-sky-800 px-4 py-2 text-white'>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Model