import React, {ReactNode} from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import hero from "../../images/landing-hero.png";
import Trending from "./Trending";
import LatestAndGreatest from "./LatestAndGreatest";
import MemberFirstAccess from "./MemberFirstAccess";
import GetInspired from "./GetInspired";
import Prefooter from "../footer/Prefooter";

//
import { ProductsList } from "../../data/shoeCollection";


export const HeroBanner = () => {
    return (
        <Hero className="hero">
            <div className="relative">
                <div className="gradient-box">
                    <img src={hero} alt="Man running track" className="hero w-full"/>
                </div>
                <div className="hero-content absolute ml-10 md:ml-20 w-full">
                    <h2 className="title text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">SHINE BRIGHT,<br/>SHOP NEON.</h2>
                    <p className="sub-header w-1/2 text-white text-sm md:text-xl my-2 md:mb-4 font-normal md:w-7/12" style={{color: '#9A5B27'}}>Take on anything the holidays bring your way in these functional styles.</p>
                    <div className="space-x-2 lg:space-x-5">
                        <button
                            className="cta-btn1"
                        >Shop</button>
                        <button
                            className="cta-btn2"
                        >Explore</button>
                    </div>
                </div>
            </div>
            <Trending/>
            <LatestAndGreatest productData={ProductsList}/>
            <MemberFirstAccess/>
            <GetInspired/>
            <Prefooter/>
        </Hero>
    )
}

export default HeroBanner;

const Hero = styled.section`
    position: relative;

    .gradient-box {
        z-index: 1;
        display: inline-block;
        background: rgb(160,142,132);
        background: linear-gradient(90deg, rgba(160,142,132,1) 0%, rgba(241,216,204,0.8687850140056023) 25%, rgba(255,255,255,0) 100%);    }
    
    .hero {
        position: relative;
        filter: brightness(80%);
        display: block;
        z-index: -1;
    }

    .cta-btn1 {
        border: none;
        background-color: #111;
        font-size: 13px;
        color: #FFF;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn1:hover {
        background-color: #404040;
    }

    .cta-btn2 {
        border: none;
        background-color: #FFF;
        font-size: 13px;
        color: #111;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn2:hover {
        background: rgba(255, 255, 255, .6) 
    }

    .hero-content {
        //color: red;
        position: absolute;
        top: 35%;

        @media only screen and ${breakpoint.device.sm} {
            //color: blue;
        }

        @media only screen and ${breakpoint.device.md} {
            //color: green;
        }

        @media only screen and ${breakpoint.device.lg} {
            //color: black;
        }

        @media only screen and ${breakpoint.device.xl} {
            //color: yellow;
        }
    }

    .title {

        @media only screen and ${breakpoint.device.sm} {
  
        }

        @media only screen and ${breakpoint.device.md} {
  
        }
    }

    .sub-header {
        display: none;
        @media only screen and ${breakpoint.device.md} {
            display: block;
        }
    }
`