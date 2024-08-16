import React from 'react'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
export default function About() {
  return (
    <>
       <div className="bg-teal-700   p-12 h-lvh py-72">
      <h2 className=" text-center font-bold mb-4 text-white text-5xl"> ABOUT COMPONENT </h2>
      <div className="flex justify-center mb-4 mt-2">
      <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      <TfiLayoutLineSolid  className="text-4xl text-white" /> 
        <FaStar  className="text-4xl text-white" />
       <TfiLayoutLineSolid  className="text-4xl text-white" />
        <TfiLayoutLineSolid  className="text-4xl text-white" /> 
      </div>
     <div className="flex justify-center gap-5 text-white text-2xl max-w-6xl m-auto text-center"> 
        <p>
        Freelancer is a free bootstrap theme created by Route. The download
        includes <br /> the complete source files including HTML, CSS, and JavaScript
        as well as <br /> optional SASS stylesheets for easy customization.
      </p>
      <p>
        Freelancer is a free bootstrap theme created by Route. The download
        includes <br /> the complete source files including HTML, CSS, and JavaScript
        as well as <br /> optional SASS stylesheets for easy customization.
      </p>
      </div>
    </div> 

    </>
  )
}
