import React from 'react'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
import img from '../../../src/assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <div className="bg-teal-700 text-center text-white w-full max-w-screen h-lvh py-56  ">
     <div className="">
     <img src={img} className="w-64 m-auto  " alt="" />
      <h2 className="text-4xl font-bold text-center mt-5 "> START FRAMEWORK </h2>
      <div className="flex justify-center mt-2">
      <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      <TfiLayoutLineSolid  className="text-4xl text-white" /> 
        <FaStar  className="text-4xl text-white" />
       <TfiLayoutLineSolid  className="text-4xl text-white" />
        <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      </div>
      <p className='text-2xl'>Graphic Artist - Web Designer - Illustrator</p>
     </div>
    </div>
    </>
  )
}
