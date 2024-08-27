import React from 'react'
import FooterImg from "../../assets/footer.jpg"
import { motion } from 'framer-motion'

const bgImage = {
    backgroundImage: `url(${FooterImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
  

const Footer = () => {
  return (
    <motion.footer
     initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5, delay: 0.2}}
     style={bgImage} className='mt-16 h-[500px] bg-brandDark relative flex justify-center items-end'>
        {/* radial gradient section */}
        <div className='absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10'
        style={{background: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(11,11,13,0.5) 70%, rgba(11,11,13,0.5) 90%)"}}>
</div>
    <p className='relative z-20 mb-6'>© 2024 All right Reserved | Muhammad Shahzad ❤</p>
    </motion.footer>
  )
}

export default Footer