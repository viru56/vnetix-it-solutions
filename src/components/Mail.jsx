import React, { useState } from 'react'
import { MailIcon } from '@heroicons/react/outline';
import emailjs from '@emailjs/browser';
import { MAIL_SERVICE_ID, MAIL_TEMPLATE_ID } from '../config';
import Model from './Model';
function Mail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(MAIL_SERVICE_ID,MAIL_TEMPLATE_ID,{
      from_name: name,
      from_email: email,
      message,
      });
    setEmail('');
    setName('');
    setMessage('');
    setShowModal(true);
  }
  return (
    <div className='w-full py-16'>
      <div className='grid md:grid-cols-2 p-6  max-w-[1240px]  m-auto'>
        <div className='flex flex-col'>
          <h2 className='text-2xl text-bold'>Message Us</h2>
          <p className=' max-w-xs'>We provide customized solutions as per the needs of the customer to help them succeed in their business.</p>
          <MailIcon className='w-[200px]' />
        </div>
        <form className=' shadow-lg p-4 rounded' onSubmit={handleSubmit}>
          <div className='flex flex-col pb-4'>
            <label>Full Name</label>
            <input type="string" required minLength={2} maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className='border rounded h-10 w-full px-2' />
          </div>
          <div className='flex flex-col pb-4'>
            <label>Email</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='border rounded h-10 w-full px-2' />
          </div>
          <div className='flex flex-col pb-4'>
            <label>Message</label>
            <textarea required value={message} minLength={20} maxLength={2000} onChange={(e) => setMessage(e.target.value)} type="string" className='border rounded w-full px-2' rows={4} />
          </div>
          <div className='flex justify-end '>
            <button className='border-2 rounded-md bg-sky-800 px-4 py-2 text-white'>Submit</button>
          </div>
        </form>
      </div>
      <Model onClose={() => setShowModal(false)} open={showModal} message={'Thank you for submit your query, we will get back you as soon as posible.'} />
    </div>
  )
}

export default Mail