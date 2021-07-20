import React from 'react';
import "./Topbar.css"
import { useState } from 'react';

export default function Topbar() {

    const [barOpen, setBarOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
       
        setBarOpen(!barOpen);
    }


    return (
        <>
        <div className="top">
            <div className="menu-content">
                <div className="logo">
                    Ufuk Yılmazlar
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Works</a> 
                    <a href="">Contact</a>
                </div> 
                <div onClick={handleClick} className="hamburger">
                     <span></span>
                     <span></span>
                     <span></span>
                </div>
                
               
            </div>
        </div>
       
        <div style={{left: barOpen ? 0 : -2000+"px"}} className="bar">
        <div className="bar-content">
            <div className="bar-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Works</a> 
                <a href="">Contact</a>
                 
                <a href="" className="rotate" onClick={(e)=>handleClick(e)}>+</a>
             </div> 
        </div>
    </div>
        
      
         
     </>
    )
}
