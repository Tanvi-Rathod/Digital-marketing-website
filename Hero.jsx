import React from 'react';
import '../../styles/Hero.css'
import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
  return <section className='hero__section'>
    <div className="container" id='home'>
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
              <h2>We're Creating Perfect
              Digital Products To
              
              <h2 className="highlight">Promote Your Brand </h2></h2>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi perspiciatis quam harum dolore vero nihil illum et perferendis doloremque natus, quod quisquam sit unde commodi consequuntur consectetur illo quaerat.</p>
            <div className="hero__btns">
                <button className="primary__btn">Get Started Now</button>
                <button className=" secondary__btn">Discover More</button>
            </div>
        </div>
            <div className="hero__img">
              <img src={heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
   
  
}

export default Hero;
