import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import {HeroContainer,HeroContent, HeroItems, HeroH1,HeroP, HeroBtn} from './HeroEliment';

function Hero() {

const [isOpen, setisOpen] = useState(false);

const toggle = () =>{
    setisOpen(!isOpen);
}

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        GREATEST PIZZA EVER
                    </HeroH1>
                    <HeroP>
                        READY IN 60 SECONDS
                    </HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
