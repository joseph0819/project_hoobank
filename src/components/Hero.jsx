import React from 'react'
import styles from '../style'
import { robot,discount } from '../assets'

const Hero = () => (
    <section className={`flex md:flex-ro flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px:6` }>

        <div className='flex fle-row items-center py-[6px] py-4 bg-discount-gradient rounded-[10px] mb-2'>
       <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
       <p className={`${styles.paragraph} ml-2 mr-2`}>
       <span className='text-white'> 20% </span>
       Discount For  {" "} 
       <span className='text-white'> 1 Month </span>
       </p>
      
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className='flex-1 font-semibold font-poppins ss:text-[32px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        The Next <br className='sm:block  hidden'/> {" "} 
        <span className='text-gradient'> Generation </span>{" "} 
        Payment Method.
        </h1>
      </div>

      </div>
      

    </section>
  
)

export default Hero
