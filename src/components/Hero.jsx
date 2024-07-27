import heroImage from '../assets/handsome-squidward.jpg'

export const Hero = () => {
  return (
    <div className='p-12 flex flex-col lg:flex-row lg:justify-between items-center gap-y-16 lg:h-screen'>
      <img  
        alt=""
        className='h-[250px] md:h-[350px] w-[250px] md:w-[350px] rounded-full object-cover drop-shadow-lg'
        src={heroImage}
      />
      <div className='text-center'>
        <h1 className='mb-4 text-3xl md:text-5xl font-bold'>Hi, I'm Handsome Squidward</h1>
        <p className='text-sm md:text-lg text-slate-700'>Welcome to my responsive portfolio</p>
      </div>
    </div>
  )
}