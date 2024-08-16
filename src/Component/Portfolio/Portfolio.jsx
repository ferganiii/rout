import React from 'react'
import { FaStar } from 'react-icons/fa'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import hom from '../../../src/assets/port3.png'
import cack from '../../../src/assets/port2.png'
import hous from '../../../src/assets/poert1.png'


export default function Portfolio() {
  return (
    <>
     
<div className=" bg-teal-700 p-10">
<h1 className="text-center mt-8 font-bold text-5xl text-cyan-950">
    PORTFOLIO SECTION
      </h1>
      <div className="flex justify-center mt-4 ">
      <TfiLayoutLineSolid  className="text-4xl text-cyan-950" />
       <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
        <FaStar  className="text-4xl text-cyan-950" />
       <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
       <TfiLayoutLineSolid  className="text-4xl text-cyan-950" /> 
      </div>
 
<div className="grid grid-cols-3 m-64 gap-14 mt-10">
 <div>
    <img className="h-auto max-w-full rounded-lg " src={hom} alt='' />
  </div> 
  <div>
    <img className="h-auto max-w-full rounded-lg" src={cack} alt='' />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={hous} alt='' />
  </div>
    <div>
    <img className="h-auto max-w-full rounded-lg" src={cack} alt='' />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={hous} alt='' />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={hom} alt='' />
  </div>

  
</div>
</div>
   

</>
    

  )
}
