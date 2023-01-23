import {useRef} from 'react'


import '../components/carousel.css'
import { motion } from 'framer-motion'

import carro from '../imgs/carro.jpg'
import carro2 from '../imgs/carro2.jpg'
import carro3 from '../imgs/carro3.jpg'
import carro4 from '../imgs/carro4.jpg'


const carros = [carro, carro2, carro3, carro4]



export default function Carousel() {

  const carousel = useRef();


  return (
    <div className="Container">


        <motion.div className='carousel' whileTap={{ cursor: "grabiing"}}>

          <motion.div className='inner' drag="x" dragConstraints={{right: 0, left: -845.615}} initial={{ x: 100}} animate={{ x: 0}} transition={{duration: 0.9}}> 

            {carros.map(image => (
              <motion.div className='item' key={image} >
                <img src={image} alt="Auto-Escola" />
                
              </motion.div>
            ))}


          </motion.div>




        </motion.div>
      

    </div>
  )
}

