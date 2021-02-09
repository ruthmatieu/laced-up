import React from 'react';
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import { Link} from 'react-router-dom';

import ShoeSize from './ShoeSize';

const Shoe = ({shoeList}) => {
    
    const params = useParams();

    const shoe = shoeList.find(item => `${item.id}` === params.id);
  console.log("heroes", shoe)
    
    return (
        <div style={{textAlign: 'left'}}>
            <div style={{backgroundColor: '#F7F7F7', padding: '10px 0', textAlign: 'center'}}>
                <p style={{margin: '0', textTransform: 'uppercase'}}>Free shipping & 60-Day Free return</p>
                <Link to='/membership'>Join Now</Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '25px 15px'}}>               
                <div>
                    <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                    <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                    
                </div>
                <p style={{margin: '0', fontWeight: '600'}}>${shoe.price}</p>
            </div>

            <img src={shoe.image} alt={shoe.name} style={{width: '100%'}}/>
           <ShoeSize/>
        </div>
    )
}

export default Shoe;

