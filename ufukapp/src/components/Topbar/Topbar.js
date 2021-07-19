import React from 'react';
import "./Topbar.css"

export default function Topbar() {
    return (
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
                <div className="hamburger">
                     <span></span>
                     <span></span>
                     <span></span>
                </div>
            </div>
        </div>
    )
}
