import heroImage from '../assets/handsome-squidward.jpg'

export const Hero = () => {
  return (
    <div className='p-12 flex flex-col items-center gap-y-16'>
      <img  
        alt=""
        className='h-[350px] w-[350px] rounded-full object-cover drop-shadow-lg'
        src={heroImage}
      />
      <div className='text-center'>
        <h1 className='mb-4 text-5xl font-bold'>Hi, I'm Handsome Squidward</h1>
        <p className='text-lg text-slate-700'>Welcome to my responsive portfolio</p>
      </div>
    </div>
  )
}