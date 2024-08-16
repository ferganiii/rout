import { useState } from 'react'
import Style from './TempletName.modules.css'

import React from 'react'
import { useEffect } from 'react'

export default function TempletName() {
const[counter,setcounter]=useState(0)
useEffect (()=>{
    console.log('monting');
    
},[])
  return (
    <>
        <h2>TempletName</h2>
    </>
  )
}
