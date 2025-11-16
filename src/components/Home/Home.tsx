import React from 'react';
import { motion } from "framer-motion";
import "../../styles/Home/Home.css";
import HomeLogo from "../../assets/HomeLogo.jpg";
import ScrollImg from "../../assets/scroll.png";


interface MotionVariants {
    HomeContent: {
        start: {},
        end: {},
    },
    ScrollImg: {
        start: {},
        end: {},
    },
    TitleContainer:{
        TitleStart:{},
        TitleEnd:{},
        DiscStart:{},
        DiscEnd:{},
    },
    TitleText:{
        TitleStart:{},
        TitleEnd:{},
        DiscStart:{},
        DiscEnd:{},
    },
};

const HomeContentVariants: MotionVariants["HomeContent"] = {

    start: {
        x: -100,
        opacity: 0,
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            staggerChildren: 0.2,
        }
    },
};

const ScrollVariants : MotionVariants["ScrollImg"]={
    
    start: {
        y: -20,
    },
    end: {
        y: 0,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType:"mirror",
        }
    },
};

const TitleContainerVariants : MotionVariants["TitleContainer"]={
    TitleStart:{
        opacity:1,
    },
    TitleEnd:{
        opacity:1,
        transition:{
            staggerChildren:0.07,
            delayChildren:1*0.2,
            duration:2,
        }
    },
    DiscStart:{
        opacity:1,
    },
    DiscEnd:{
        opacity:1,
        transition:{
            staggerChildren:0.03,
            delayChildren:1*0.1,
            duration:1,
        }
    },
     
};

const TitleTextVariants : MotionVariants["TitleText"]={
    TitleStart:{
        opacity:0,
        y:-5,
    },
    TitleEnd:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    },
    DiscStart:{
        opacity:0,
        y:-5,
    },
    DiscEnd:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    },
};



const Home = () => {
    let TitleText:string = "Frontend Developer!";
    let PText:string = "I am Mostafa Azari, I am 24 years old and I am currently a graduate student at West Tehran Azad University, majoring in software engineering."
    return (
        <div className="Home">
            <div className="HomeWrapper">
                <motion.div className="HomeContainer" variants={HomeContentVariants} initial="start" whileInView={"end"} >
                    <motion.div className="HomeImg" variants={HomeContentVariants}>
                        <img src={HomeLogo} className="MyLogo" />
                    </motion.div>
                    <motion.div className="HomeText" variants={HomeContentVariants}>
                        <motion.h1 variants={TitleContainerVariants} initial="TitleStart" animate="TitleEnd">{TitleText.split("").map((char,index)=>(<motion.span variants={TitleTextVariants} key={index}>{char}</motion.span>))}</motion.h1>
                        <hr />
                        <motion.p variants={TitleContainerVariants} initial="DiscStart" animate="DiscEnd">{PText.split("").map((char,index)=>(<motion.span variants={TitleTextVariants} key={index}>{char}</motion.span>))}</motion.p>
                    </motion.div>
                    <div className="ScrollDiv">
                        <motion.img src={ScrollImg} variants={ScrollVariants} initial="start" animate="end" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
};


export default Home;
