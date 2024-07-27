import heroImage from '../../assets/handsome-squidward.jpg'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <img  
        alt=""
        className='hero-image'
        src={heroImage}
      />
      <div className='hero-text'>
        <h1>Hi, I'm Handsome Squidward</h1>
        <p>Welcome to my responsive portfolio</p>
      </div>
    </div>
  )
}