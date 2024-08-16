import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navebar from './Component/Navebar/Navebar'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import Notfount from './Component/Notfount/Notfount'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)
   
  const rout=   createBrowserRouter([
    { path:'', element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'protoflio' ,element:<Portfolio/>},
      {path:'contact' ,element:<Contact/>},
      {path:'*' ,element:<Notfount/>},
      
    ]}
  ])  

  return (
    <>

    <RouterProvider router={rout}/>
   

    </>
  )
}

export default App
