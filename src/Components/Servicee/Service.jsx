import React from 'react'
import './Service.css'
import service1 from '../Servicee/Picture/service1.png'
import service2 from '../Servicee/Picture/service2.png'
import service3 from '../Servicee/Picture/service3.webp'
import service4 from '../Servicee/Picture/service4.jpg'


function Service() {
    const yacine = [
        {
            icon: service1,
            name:"Get Best Prices",
            subTitle:"Pay through our application and save thousands and get amazing rewards",

        },
        {
            icon: service2,
            name:"Fast Delivery Time",
            subTitle:"We deliver your order within 30 minutes of placing the payment.",

        },
        {
            icon: service3,
            name:"Secure Payment Method",
            subTitle:"Enjoy the flexible pament tnrough our",

        },
        {
            icon: service4,
            name:"Secure Payment Method",
            subTitle:"Enjoy the flexible pament tnrough our",

        },
    ];



  return (
    <section className='hdt' id="service">
        {yacine.map((service) => {
            return(
                <div className='service'>
                    <div className='icon'>
                        <img src={service.icon} alt='' />
                    </div>
                    <div className='Paragrh'>
                         <h3>{service.name}</h3>
                         <p>{service.subTitle}</p>
                    </div>
                   

                </div>

            );
        })}

    </section>
  )
}

export default Service