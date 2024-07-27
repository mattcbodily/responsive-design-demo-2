import { useState } from 'react'

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6 cursor-pointer'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>
      {menuOpen && (
        <div className='absolute right-8 top-12 p-4 space-y-1 rounded-lg bg-slate-200 text-slate-900'>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Contact</p>
        </div>
      )}
    </>
  )
}