import React from 'react';
import {motion} from "framer-motion";
import "../../styles/Navbar/Navbar.css";

interface Variants {
    navMotion : {
        initial : {},
        onView : {},
        onHover : {},
    }
};

const NavVariants : Variants["navMotion"] ={
    initial : {
        y:-50,
        opacity:0,
    },
    onView : {
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            type : "spring",
        }
    },
    onHover : {
        scale:1.2,
        color : "blue",
        transition:{
            duration:0.5,
        }
    },
};



const Navbar = ()=>{
    return(
        <div className="Navbar">
            <motion.div className="LinksContainer" variants={NavVariants} initial="initial" whileInView={"onView"}>
                <motion.a variants={NavVariants} whileHover={"onHover"} href="#Home">Home</motion.a>
                <motion.a variants={NavVariants} whileHover={"onHover"} href="#AboutMe">AboutMe</motion.a>
                <motion.a variants={NavVariants} whileHover={"onHover"} href="#MeSkills">MySkills</motion.a>
                <motion.a variants={NavVariants} whileHover={"onHover"} href="#Projects">Projects</motion.a>
                <motion.a variants={NavVariants} whileHover={"onHover"} href="#ContactMe">ContactMe</motion.a>
            </motion.div>
        </div>
    )
}


export default Navbar;