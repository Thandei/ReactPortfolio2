import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import FadeIn from 'react-fade-in';
import "./Home.css"

export default function Home() {
    return (
        <>
        
        <div className="home">
        <FadeIn>
            <div className="homeContent">
                <div className="homeTitle">
                <h1>Hello There, I'm Ufuk !</h1>
                </div>
                <div className="homeSubtitle">
                    I'm a web enthusiast
                </div>
                <div className="homeDownSign">
                    <FontAwesomeIcon size="lg" icon={faCertificate} />
                </div>
                
            </div>
            </FadeIn>
        </div>
      
        
    </>
    )
}
