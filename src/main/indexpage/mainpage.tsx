import React from 'react'
import main from './main.module.scss'
import Leftbar from '../left/leftbar'
import { Outlet } from 'react-router-dom'
export default function Mainpage (){
  
    return(
        // <div className={main.divide}>   
        // <Leftbar />
        // <div>
            <Outlet></Outlet>
        // {/* </div> */}
        // </div>  
    )
}