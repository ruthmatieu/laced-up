import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { Link} from 'react-router-dom';
import Footer from './Footer';

const AllShoes = (props) => {
    // console.log("items", props);
    
    return (
        <Wrapper > 
            <h3 style={{textAlign: 'left'}}>All Shoes ({props.shoeList.length})</h3>
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
            {props.shoeList.map(item => {
                return(
                <div key={item.id} style={{justifyContent: 'space-between', width: '50vw'}}>
                    <div style={{padding: '0 3px 20px 3px', textAlign: 'left'}}>
                        <Link to={`/shoe/${item.id}`}><img src={item.image} alt={item.name} style={{width: '100%'}}/></Link>
                        <div style={{paddingLeft: '10px'}}>
                            <p style={{margin: '0', paddingTop: '5px', fontWeight: '700'}}>{item.name}</p>
                            <p style={{margin: '0', color: '#767676'}}>{item.subTitle}</p>
                            <p style={{margin: '0', color: '#767676'}}>{item.availability}</p>
                            <p style={{margin: '0', paddingTop: '5px', fontWeight: '700'}}>${item.price}</p>
                        </div>
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
  
    margin: '0 3vw';

    @media only screen and ${breakpoint.device.desktop} {
        color: red;
    }
`;