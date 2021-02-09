import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';


const NewItem = (props) => {


  return (
    <ItemWrapper key={props.id} style={{ backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover', position:'relative'}}>
        <div className='wrapper-one'>
          <div className='wrapper-two'>
            <h3>{props.description}</h3>
            <Link to={props.link}><button>{props.cta}</button></Link>
          </div>
        </div>
    </ItemWrapper>
  );
}

export default NewItem;

const ItemWrapper = styled.div`
  margin: 10px 0;
  position: relative;

  .wrapper-one {
    width: 100%;
    height: 400px;
    position: relative;
    margin-left: 15px;
  }

  .wrapper-two {
    position: absolute; 
    top: 270px;
    text-align: left;
  }
  
@media only screen and ${breakpoint.device.laptop} {

 

}

@media only screen and ${breakpoint.device.desktop} {

}
`;