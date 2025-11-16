import React from 'react';
import {motion} from "framer-motion";
import "../../styles/AboutMe/AboutMe.css";
import MyImg from "../../assets/HomeLogo.jpg";

const AboutMe = () =>{
    return(
        <div className="AboutMe">
            <div className="AboutMeWrapper">
                <div className="AboutContainer">
                    <div className="AboutMeImg">
                        <img src={MyImg} alt="AboutMe"/>
                    </div>
                    <div className="AboutMeText">
                        <h1>About Me</h1>
                        <hr/>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quidem esse architecto praesentium,
                            consectetur suscipit iure dolore blanditiis tempora aspernatur, natus totam! Corrupti voluptas, deserunt optio adipisci saepe libero! Repudiandae?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quidem esse architecto praesentium,
                            consectetur suscipit iure dolore blanditiis tempora aspernatur, natus totam! Corrupti voluptas, deserunt optio adipisci saepe libero! Repudiandae?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quidem esse architecto praesentium,
                            consectetur suscipit iure dolore blanditiis tempora aspernatur, natus totam! Corrupti voluptas, deserunt optio adipisci saepe libero! Repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default AboutMe;