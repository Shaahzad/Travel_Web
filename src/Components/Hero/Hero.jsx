import React from 'react'
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
    <section className='min-h-[900px] flex justify-center items-center '>
        {/* radial gradient section */}
        <div className='absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10'
        style={{background: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(11,11,13,0.5) 70%, rgba(11,11,13,0.5) 90%)"}}
        >

        </div>


        {/* hero section */}
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 0.5}} className='container relative z-20 text-center space-y-8'>
            <h1 className='text-5xl md:text-8xl font-bold font-serif'>The Great OutDoor</h1>
            <p>Wonder Often, Wonder Always</p>
            <div className='inline-flex items-center justify-center border w-14 h-14 rounded-full !mt-14 
            md:!mt-20'>
                <FaPlay/>
                </div>
        </motion.div>
    </section>
    </>
  )
}

export default Hero