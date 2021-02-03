import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import Footer from './Footer';
import { allShoes } from '../data';

const AllShoes = () => {
    return (
        <Wrapper style={{margin: '0 3vw'}}>
            <h3 style={{textAlign: 'left'}}>All Shoes ({allShoes.length})</h3>
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
            {allShoes.map(item => {
                return(
                <div key={item.id} style={{justifyContent: 'space-between', width: '47vw'}}>
                    <div style={{padding: '0 3px'}}>
                    <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                    <p>{item.name}</p>
                    <p>{item.subTitle}</p>
                    <p>{item.price}</p>
                    </div>
                </div>)
            })}
            </section>
            <Footer/>
        </Wrapper>
    )
}

export default AllShoes;

const Wrapper = styled.div `
  

  @media only screen and ${breakpoint.device.desktop} {
    color: red;
  }
`;