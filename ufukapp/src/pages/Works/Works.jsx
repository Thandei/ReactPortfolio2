import React from 'react'
import "./Works.css"
import { SocialIcon } from 'react-social-icons';
import {useState} from "react";
import FadeIn from 'react-fade-in';

export default function Works() {

    const [entered, setEntered] = useState(false)

    const handleBoxClick = () => {
        window.location="https://github.com/Thandei"
    }

    const handleEnter = ()=> {
        setEntered(true)
    }

    const handleLeave = () => {
        setEntered(false)
    }
    return (
        <div className="Works">
                <FadeIn>
            <div className="worksContent">
        
                <div className="boxWriting">
                    Click to See My Projects
                </div>
                <div className="githubBox" onClick={handleBoxClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <SocialIcon bgColor={entered ? "black" : "white" }  fgColor={entered ? "white" : "black"}  style={{zIndex:"900"}} url="https://github.com/Thandei" />
                <div className="bg"></div>
                </div>
              
            </div>
            </FadeIn>
        </div>
    )
}
