import React from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import { Link } from "react-router-dom";
import one from "../../images/inspired-one.png";
import two from "../../images/inspired-two.png";
import three from "../../images/inspired-three.png";


const GetInspired = () => {
    return (
        <InspiredContainer className="w-full mt-8 md:mt-20 relative">
            <h2 className="mb-4 text-lg md:text-2xl font-medium">Get Inspired</h2>
            <div className="space-y-3 md:flex md:space-x-4 md:space-y-0">
                <div className="w-full relative">
                    <img src={one} alt="Trending products" className="w-full"/>
                    <div className="inspired-content">
                        <h5 className="mb-2 text-base lg:text-lg font-bold">The Freshest Collection</h5>
                        <button className="cta-btn">
                            Shop
                        </button>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src={two} alt="Trending products" className="w-full"/>
                    <div className="inspired-content">
                        <h5 className="mb-2 text-base lg:text-lg font-bold">Bold Styles, Shop Now</h5>
                        <button className="cta-btn">
                            Shop
                        </button>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src={three} alt="Trending products" className="w-full"/>
                    <div className="inspired-content">
                        <h5 className="mb-2 text-base lg:text-lg font-bold">Shop All Black</h5>
                        <button className="cta-btn">
                            Shop
                        </button>
                    </div>
                </div>
            </div>
        </InspiredContainer>
    )
};

export default GetInspired;

const InspiredContainer = styled.section`
    .cta-btn {
        border: none;
        background-color: #FFF;
        font-size: 13px;
        color: #111;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn:hover {
        background: rgba(255, 255, 255, .6) 
    }
    .inspired-content {
        color: #FFF;
        position: absolute;
        margin-left: 5%;
        bottom: 7%;
    

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
`