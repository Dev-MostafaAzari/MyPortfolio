import React from 'react';
import {motion} from "framer-motion";
import "../../styles/Navbar/Navbar.css";

interface Variants {
    navMotion : {
        initial : {},
        animation : {}
    }
};

const NavVariants : Variants["navMotion"] ={
    initial : {
        y:-50,
        opacity:0,
    },
    animation : {
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            type : "spring",
        }
    }
};



const Navbar = ()=>{
    return(
        <div className="Navbar">
            <motion.div className="LinksContainer" variants={NavVariants} initial="initial" whileInView={"animation"}>
                <a href="#">Home</a>
                <a href="#">AboutMe</a>
                <a href="#">MySkills</a>
                <a href="#">Projects</a>
                <a href="#">ContactMe</a>
            </motion.div>
        </div>
    )
}


export default Navbar;