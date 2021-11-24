import React from "react";
import styled from "styled-components";
import breakpoint from '../breakpoints';
import { Link, useParams } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

const NewRelease = ({ data, addToCart }) => {

    document.title = `LacedUp | Women's Shoes`;

    const params = useParams();
    console.log('params', params);

    const allData = data.filter(item => (
        item.category === `Women's Shoes` || item.category === `Men's Shoes`
    ));

    const shoe = data.find(item => `${item.id}` === params.id);
    console.log('shoe',shoe)

    return (
        <div className="">
            <Nav/>
            <Wrapper > 
            <h3 className="m-0 pl-5 pb-10 text-xl xl:text-2xl font-semibold">New Released Sneakers + Shoes ({allData.length})</h3>
            <div style={{display: 'flex'}}>

                    <ul className='shoe-type desktop-filter pl-0 xl:pl-5'>
                            <li>Lifestyle</li>
                            <li>Jordan</li>
                            <li>Running</li>
                            <li>Basketball</li>
                            <li>Football</li>
                            <li>Soccer</li>
                            <li>Training + Gym</li>
                            <li>Skateboarding</li>
                            <li>Baseball</li>
                            <li>Golf</li>
                            <li>Tennis</li>
                            <li>Track + Field</li>
                            <li>Walking</li>
                            <li>Shoes $100 + Under</li>
                    </ul>
                        

                <section>
                
                    {allData.map(item => (
                    
                        <div className='shoe-info-wrapper' key={item.id}>
                            <div className='shoe-info-sub-wrapper'>
                                <Link to={`/shoe/${item.id}`}><img src={item.image} alt={item.name}/></Link>
                                <div className='descriptions'>
                                    <p className='m-0 pt-2 font-semibold'>{item.name}</p>
                                    <p className="m-0 font-thin" style={{ color: '#767676' }}>{item.category}</p>
                                    <p className="m-0 font-thin" style={{ color: '#767676' }}>{item.color}</p>
                                    <p className='m-0 pt-2 pr-4 font-semibold'>${item.price}</p>
                                    <br/>
                                    <button className="shoe-btn" onClick={() => addToCart(item, 1)}>Add to Cart</button> 
                                </div>
                            </div>
                        </div>
                    ))}
            
                </section>
                </div>

            
        </Wrapper>
        <Footer/>
        </div>
    )
}

export default NewRelease;


const Wrapper = styled.div `
    max-width: 1800px;
    margin: 0 auto;
    
    .desktop-filter {
        display: none;
    }
    section {
        display: flex;
        flex-wrap: wrap;
    }

    .shoe-btn {
        border: none;
        background-color: #111;
        font-size: 12px;
        color: #FFF;
        height: 2rem;
        border-radius: 25px;
        width: 6rem;
    }

    .shoe-btn:hover {
        background-color: #404040;
    }

    .shoe-info-wrapper {
        justify-content: space-between;
        width: 50vw;
        padding-bottom: 2rem;
    }
    .shoe-info-sub-wrapper{
        padding: 0 3px 20px 3px;
        text-align: center;
    }
    img {
        width: 100%;
    }
    .descriptions {
        text-align: left;
        padding-left: 10px;
    }
    .bold-desc {
        margin: 0;
        padding-top: 5px; 
        font-weight: 700;
    }
    .thin-desc {
        margin: 0;
        color: #767676;
    }
    @media only screen and ${breakpoint.device.xl} {
        //padding: 0 3vw;
        
        section {
            width: calc(100% - 300px);
        }
        .shoe-info-wrapper {
            width: 24%;
            overflow-x: auto;
        }
        .desktop-filter {
            display: block;
        }
        .shoe-info-sub-wrapper{
            padding: 0 3px 20px 10px;
            text-align: center;
        }
        .shoe-type {
            text-align: left;
            height: 100vh;
            width: 300px;
            list-style: none;
        }
        ul li {
            list-items: none;
            //color: #000;
            text-transform: capitalize;
            //font-weight: 600;
            padding-bottom: 13px;
        }
        ul li:hover {
            color: gray;
            cursor: pointer;
        }
    }
`;
