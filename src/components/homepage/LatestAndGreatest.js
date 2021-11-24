import React from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import { Link } from "react-router-dom";
import { ProductsList } from "../../data/shoeCollection";

const LatestAndGreatest = (props) => {
    const { latestAndGreatest } = props.productData
    console.log('LG', latestAndGreatest)
    return (
        <Scroll className="w-full mt-8 md:mt-20">
            <h2 className="mb-4 text-lg md:text-2xl font-medium">The Latest & Greatest</h2>
                <div className="space-x-3 scroll-wrapper">
                    {latestAndGreatest.map(item => {
                        return (
                            <Link to={`/shoe/${item.id}`} className="card">
                                <div key={item.id}>
                                    <img src={item.image} alt={item.name}/>
                                        <div className="flex justify-between text-left">
                                            <div className="text-md">
                                                <p className="m-0 pt-2 font-semibold">{item.name}</p>
                                                <p className="m-0 font-thin" style={{ color: '#767676' }}>{item.category}</p>
                                            </div>
                                            
                                            <p className="m-0 pt-2 pr-4 text-sm font-semibold">${item.price}</p>
                                        </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
        </Scroll>
    )
};

export default LatestAndGreatest;

const Scroll = styled.section`
    .scroll-wrapper {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 3rem;
    }

    .card {
        flex: 0 0 auto;
    }

    .card {
        img {
            width: 200px;
            @media only screen and ${breakpoint.device.sm} {
                width: 250px;
            }
    
            @media only screen and ${breakpoint.device.md} {
                //color: green;
            }
    
            @media only screen and ${breakpoint.device.lg} {
                //color: black;
            }
    
            @media only screen and ${breakpoint.device.xl} {
                width: 500px;
            }
        }
        color: #9A5B27;

        
    }
`