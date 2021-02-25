import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { Link} from 'react-router-dom';
import Footer from './Footer';

const AllShoes = (props) => {
    // console.log("items", props);
    document.title = `LacedUp | Men + Women's Shoes`;
    
    return (
        <Wrapper > 
            <h3>All Shoes ({props.shoeList.length})</h3>
            <div style={{display: 'flex'}}>

                    <ul className='shoe-type desktop-filter'>
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
                
                    {props.shoeList.map(item => {
                        return(
                        <div className='shoe-info-wrapper' key={item.id}>
                            <div className='shoe-info-sub-wrapper'>
                                <Link to={`/shoe/${item.id}`}><img src={item.image} alt={item.name}/></Link>
                                <div className='descriptions'>
                                    <p className='bold-desc'>{item.name}</p>
                                    <p className='thin-desc'>{item.subTitle}</p>
                                    <p className='thin-desc'>{item.availability}</p>
                                    <p className='bold-desc'>${item.price}</p>
                                </div>
                            </div>
                        </div>)
                    })}
            
                </section>
                </div>

            <Footer/>
        </Wrapper>
    )
}

export default AllShoes;

const Wrapper = styled.div `
    margin: '0 3vw';

    h3 {
        text-align: left;
        padding-left: 15px;
    }

    .desktop-filter {
        display: none;
    }

    section {
        display: flex;
        flex-wrap: wrap;
    }
    .shoe-info-wrapper {
        justify-content: space-between;
        width: 50vw;
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

    @media only screen and ${breakpoint.device.desktop} {
        margin: '0 23px';

        h3 {
            font-size: 25px;
            margin-left: 27px;
        }

        section {
            width: 100%;
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
        }
        ul li {
            list-items: none;
            color: #000;
            text-transform: capitalize;
            font-weight: 600;
            padding-bottom: 13px;
        }

        ul li:hover {
            color: gray;
            cursor: pointer;
        }
    }
`;