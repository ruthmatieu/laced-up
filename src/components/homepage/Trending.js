import React from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import trendOne from "../../images/trending-one.png";
import trendTwo from "../../images/trending-two.png";

export const Trending = () => {
    return (
        <Container className="w-full mt-8 md:mt-20">
            <div>
                <h2 className="mb-4 text-lg md:text-2xl font-medium">Trending Now</h2>
                <div className="space-y-3 md:flex md:space-x-4 md:space-y-0">
                    <div className="trending-one w-full relative">
                        <img src={trendOne} alt="Trending products" className="w-full"/>
                        <div className="trending-content">
                            <h5 className="mb-2 text-base lg:text-lg font-bold">Shoes Always $100 & Under</h5>
                            <button className="cta-btn">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div className="trending-two w-full relative">
                        <img src={trendTwo} alt="Trending products" className="w-full"/>
                        <div className="trending-content">
                            <h5 className="mb-2 text-base lg:text-lg font-bold">Shop Holiday Styles</h5>
                            <button className="cta-btn">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Trending;

const Container = styled.section`

    .cta-btn {
        border: none;
        background-color: #111;
        font-size: 13px;
        color: #FFF;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn:hover {
        background-color: #404040;
    }

    .trending-content {
        color: #9A5B27;
        position: absolute;
        margin-left: 5%;
        bottom: 10%;

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