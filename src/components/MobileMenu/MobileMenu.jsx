import { useState } from 'react'
import './MobileMenu.css'

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        className='menu-button'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' height='24' width='24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>
      {menuOpen && (
        <div className='mobile-menu'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
    </>
  )
}