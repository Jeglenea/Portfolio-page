import React from 'react';
import WomanImg from '../img/contact/woman.png';


const Contact = () => {
  return <section className='section'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center 
      justify-start pt-36 gap-x-8 text-center lg:text-left'>
        <div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 
        left-0 right-0 top-72 -z-10'>
          
        </div>
        <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>
            Contact with me
          </h1>
          <p className='mb-12'>
          I loved to get your suggestions.
          </p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input
              className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondar w-full pl-3 placeholder:text-[#757879]'
              
              type='text'
              placeholder='Your name'/>
              <input
              className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondar w-full pl-3 placeholder:text-[#757879]'
              
              type='text'
              placeholder='Your e-mail address'/>
            </div>
            <input
              className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondar w-full pl-3 placeholder:text-[#757879]'
              
              type='text'
              placeholder='Your message to me'/>
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it :)</button>
          </form>
        </div>
        <div className='lg:flex-1'>
          <img src={WomanImg} alt=''/>
        </div>
      </div>
    </div>
  </section>;
};

export default Contact;
