import React from 'react'
import "./About.css"
import { SocialIcon } from 'react-social-icons';
import FadeIn from 'react-fade-in';
export default function About() {
    return (
        <div className="About">
            <FadeIn  >
            <div className="aboutContent">
                <div className="upperP">
                Hi everyone! I'm Ufuk studying "Translation and Interpretation" in Hacettepe University. Along with educational background, I also interested and experienced in Web development, IT support.

Having strong communication skills and wonder insight made me pursue a career path including IT and Web Development with Translation. So it was not surprise to me that I inclined to the shining software world.

Now, I've been serving as a freelancer in IT world and self-taught developer while improving myself on other educational sides.
                </div>
                <div className="downIcons">
        <SocialIcon className="linkedin" url="https://www.linkedin.com/in/ufuk-yılmazlar-62a4781a3/" />
        <SocialIcon bgColor="white" className="linkedin" url="https://github.com/Thandei" />

        <SocialIcon bgColor="red" fgColor="white"  className="linkedin" url="mailto:skyforcs@gmail.com" />
                </div>
                
            </div>
            </FadeIn>
        </div>
    )
}
