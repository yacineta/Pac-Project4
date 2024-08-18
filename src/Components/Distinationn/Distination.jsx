import React from 'react'
import "./Distination.css"
import Destination1 from './Dstp/Destination1.jpg'
import Destination2 from './Dstp/Destination2.jpg'
import Destination3 from './Dstp/Destination3.jpg'
import Destination4 from './Dstp/Destination4.jpg'
import Destination5 from './Dstp/Destination5.jpg'
import Destination6 from './Dstp/Destination6.jpg'

function Distination() {
    const Cuntry = [
        {
            id:Destination1,
            name:"Kore",
            subTitle:'Kore Officially the Republic of Kore',
            price:799,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination1.jpg",
        },
        {
            id:Destination2,
            name:"Dubai",
            subTitle:'Dubia Officially the Cuntry of Emarate',
            price:459,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination2.jpg",
        },
        {
            id:Destination3,
            name:"Istanbul",
            subTitle:'Istanbul Officially the City of Turke',
            price:346,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination3.jpg",
        },
        {
            id:Destination4,
            name:"Italy",
            subTitle:'Italy Officially the Cuntry of Europe',
            price:435,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination4.jpg",
        },
        {
            id:Destination5,
            name:"Londer",
            subTitle:'Londer Officially the Cuntry of Europe',
            price:567,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination5.jpg",
        },
        {
            id:Destination6,
            name:"Marsllia",
            subTitle:'Mersaill Officially the City of France',
            price:342,
            kms:'1000 Kms Approx 2 night trip',
            image:"./Dstp/Destination6.jpg",
        },

    ];
  return (
    // <section className='Rbt' id="Destination">
      

    //     {Cuntry.map((Destination) => {
    //         return(
    //             <div className='Destinationn'>

    //                 <div className='Program'>
                        
    //                     <div className='ico'>
    //                        <img src={Destination.id} alt='' />
    //                     </div>
    //                     <div className='Paragrh'>
    //                      <h3>{Destination.name}</h3>
    //                      <p>{Destination.price}</p>
    //                     </div>
    //                 </div>
                   
                   

    //             </div>

    //         );
    //     })}

    // </section>


    <div>
        <div className='travele'>
             <h6 >Bakheta Travel </h6>
        </div>

        <div className='products'>
        
       
         {  
         Cuntry.map((productItem) =>(  

    
          <div className='card' >
          <div className=''>
         <img className='product-image'
          src={productItem.id} 
          alt={productItem.name}>

          </img>
         



         </div>
         <div className='product-name'>
           <h3 >
               {productItem.name}
           </h3>
           <h4>
            {productItem.subTitle}
           </h4>
          

         </div>
         <div className='product-price'>
           $ {productItem.price}
          
           
           </div>
         
           {/* <div>
               <button 
               className='product-add-button' 
                 onClick={() =>handleAddProduct(productItem)}
                >
                   add to carte</button>
           </div> */}
         </div>
   
         ))}
       </div>
    </div>
  )
}

export default Distination