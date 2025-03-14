import React from 'react'
import Personaje from '../../assets/Personaje.png'
import Logo from '../../assets/Logo.png'
import {motion} from 'framer-motion'; 
import {slipeUp, slipeUpInFromSide} from '../../utility/animation';

const Hero = () => {
  return (
    <section className='mt-36'>

      <div className='grid grid-cols-1 md:grid-cols-2'>

        <div  className='sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img src={Logo} alt="Logo del juego" 
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
          />
          <motion.p  className='py-12 text-white'>
              Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Ad unde quisquam fugit magni reprehenderit debitis totam
              nostrum, rerum id maiores pariatur explicabo deserunt velit
              facere culpa sequi cum dolorem deleniti?
          </motion.p>
          <motion.div 
          className='flex justify-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
          >
            <a className='bg-purple-600 py-2 px-12 rounded-3x1 text-white hover:bg-purple-700 
            transition-all duration-300 items-center cursor-pointer' > 
              Jugar 
              <i className="bi bi-xbox text-xl ml-2"></i>
              </a>
            <a className='text-white flex items-center cursor-pointer'>
              Conocer 
              <i class="bi bi-youtube text-xl ml-2"></i>
            </a>
          </motion.div>
        </div>

        <motion.div 
        className='sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={slipeUpInFromSide("right", 0.5)}
        initial="initial"
        animate="animate">
          <img src={Personaje} alt="personaje del juego"/>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
