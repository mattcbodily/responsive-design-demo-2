import { MobileMenu } from './MobileMenu'

export const Header = () => {
  return (
    <header className='h-16 px-6 relative lg:fixed lg:top-0 lg:left-0 lg:w-full flex items-center justify-between bg-gradient-to-br from-indigo-700 to-teal-700 text-slate-100 drop-shadow-lg'>
      <p className='text tracking-wider font-bold'>Handsome Squidward</p>
      <nav className='space-x-6 hidden md:inline-block'>
        <span className='cursor-pointer hover:text-indigo-200'>Home</span>
        <span className='cursor-pointer hover:text-indigo-200'>About</span>
        <span className='cursor-pointer hover:text-indigo-200'>Contact</span>
      </nav>
      <MobileMenu />
    </header>
  )
}