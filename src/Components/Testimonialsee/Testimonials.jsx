import React from 'react'
import './Testimonials.css'
import avatarImag from './assets/avatarImag.jpg'

function Testimonials() {
  return (
   <div className='Makach'>
    
    <div className='titele'>
        <h2>Happy Customers</h2>
    </div>
    <div className='testimonials'>
        <div className='testimonial'>
          <p className='praph' >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam necessitatibus omnis ullam nesciunt eum ratione esse temporibus 
                possimus velit quod, ea fugit neque aut dignissimos, a nisi illum sint incidunt.

                </p>
            <div className='info'>
               
                    <img className='avatar' src={avatarImag} alt='' />     
                
               
                <div>
                    <h3>Yassine Sheth</h3>
                    <span>Shashaan Web Solution</span>
                </div>

            </div>

        </div>

    </div>

    <div className='testimonials'>
        <div className='testimonial'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam necessitatibus omnis ullam nesciunt eum ratione esse temporibus 
                possimus velit quod, ea fugit neque aut dignissimos, a nisi illum sint incidunt.

            </p>
            <div className='info'>
                <img className='avatar' src={avatarImag} alt='' />
                <div>
                    <h3>Yassine Sheth</h3>
                    <span>Shashaan Web Solution</span>
                </div>

            </div>

        </div>

    </div>

    <div className='testimonials'>
        <div className='testimonial'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam necessitatibus omnis ullam nesciunt eum ratione esse temporibus 
                possimus velit quod, ea fugit neque aut dignissimos, a nisi illum sint incidunt.

            </p>
            <div className='info'>
                <img className='avatar' src={avatarImag} alt='' />
                <div className='sheth'>
                    <h3>Yassine Sheth</h3>
                    <span>Shashaan Web Solution</span>
                </div>

            </div>

        </div>

    </div>
   </div>
  )
}

export default Testimonials