import React from 'react'
import logo from '../../assets/logo.png'
import {slideBottom} from "../../utility/animation"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <>
    <nav className='container flex flex-row justify-around items-center py-4 md: py-8 uppercase 
    font-semibold relative z-20 text-xs md:text-lg'>
      <motion.a variants={slideBottom(0)} animate="visible" initial="hidden">about</motion.a>
      <motion.a variants={slideBottom(0.2)} animate="visible" initial="hidden">explore</motion.a>
      <motion.a variants={slideBottom(0.4)} animate="visible" initial="hidden"><img src={logo} alt="" className='w-14'/></motion.a>
      <motion.a variants={slideBottom(0.6)} animate="visible" initial="hidden">journal</motion.a>
      <motion.a variants={slideBottom(0.8)} animate="visible" initial="hidden">search</motion.a>
    </nav>
    </>
  )
}

export default Navbar