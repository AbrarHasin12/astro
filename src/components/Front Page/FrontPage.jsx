mport React from 'react'

const FrontPage = () => {
  return <div className="frontpage-rect">
    <div className='grid grid-cols-4 absolute'>
      <div className='lg:w-28 md:w-24 sm:w-20 w-16 lg:h-28 md:h-24 sm:h-20 h-16 bg-slate-900 relative lg:-top-7 md:-top-6 sm:-top-5 -top-4 lg:left-16 md:left-14 sm:left-12 left-10'></div>
      <div className='relative -top-16 col-span-2'>
      <p className='text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl'>Perceiving the</p>
      <h1 className='text-black lg:text-8xl md:text-6xl sm:text-4xl text-3xl'>Universe</h1>
      <p className='text-black lg:text-xl text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <button className='xl:px-8 lg:px-6 py-1 rounded-full border-4 border-red-500 my-auto'>explore</button>
      </div>
    </div>
  </div>;
}

export default FrontPage
