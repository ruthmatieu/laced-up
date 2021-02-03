import React from 'react';
import { Link } from 'react-router-dom';

const NewItem = (props) => {


  return (
    <div key={props.id} style={{backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover', position:'relative'}}>
        <div style={{width: '100%', height: '400px', position: 'relative'}}>
          <div style={{position: 'absolute', top: '320px', textAlign: 'center'}}>
            <h3>{props.description}</h3>
            <Link to={props.link}><button>{props.cta}</button></Link>
          </div>
        </div>
    </div>
  );
}

export default NewItem;