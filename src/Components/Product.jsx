import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='nav'>
        <div className='brand'>
            <div className='container'>
                {/* <img src={logo}></img> */}
                <h2>travel</h2>
            </div>
            <div className='toggle'></div>
        </div>
        <ul>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#service'>Service</a>
            </li>
            <li>
                <a href='#recomend'>Recomend</a>
            </li>
            <li>
                <a href='#testimonials'>Testimonials</a>
            </li>
        </ul>
        <button className='bybtn' >
            <a href='#connect'>Connect</a>
            </button>

    </div>
  )
}

export default Product