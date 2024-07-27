import { MobileMenu } from '../MobileMenu/MobileMenu'
import './Header.css'

export const Header = () => {
  return (
    <header className='page-header'>
      <p>Handsome Squidward</p>
      {/* <nav>
        <span className='nav-link'>Home</span>
        <span className='nav-link'>About</span>
        <span className='nav-link'>Contact</span>
      </nav> */}
      <MobileMenu />
    </header>
  )
}