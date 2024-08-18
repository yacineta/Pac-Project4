import React from 'react'
import './Hero.css'
import homeImag from '../Heroo/Image/Bakhta1.jpg'


function Hero() {
  return (
    <section>
       <div className='backg'>
        <img  src={homeImag} alt=''/>
       

       </div>
       <div className='content'>
        <div className='title'>
           <h1>Welcom to Bekhta Travel</h1> 
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Repellendus natus praesentium cumque?Voluptatum voluptas veniam cupiditate
        
           </p>
        </div>
        <div className='search'>
            <div className='container'>
                <label htmlFor=''>
                    Where you want to go
                </label>
                <input type='text' placeholder='Search your loction'></input>

            </div>
            <div className='container'>
                <label htmlFor=''>
                    Check-in
                </label>
                <input type='date' ></input>

            </div>
            <div className='container'>
                <label htmlFor=''>
                    Check-out
                </label>
                <input type='date' ></input>

            </div>
            <button className='Rm-btn'>Explore Now</button>

        </div>
       </div>
    </section>
  )
}

export default Hero