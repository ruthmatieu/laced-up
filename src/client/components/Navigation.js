import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrCart } from 'react-icons/gr';
import styled from 'styled-components';
import breakpoint from '../../breakpoint';

const Navigation = ({cart}) => {
    const [showMenu, setShowMenu] = useState(false);

    let menu

    if(showMenu) {
        menu = 
        <div className='mobile-nav-items'>
            <div>
                <MenuLink to='/'><p>Home</p></MenuLink>
                <MenuLink to='/new-releases'><p>New Releases</p></MenuLink>
                <MenuLink to='/men-shoes'><p>Men</p></MenuLink>
                <MenuLink to='/women-shoes'><p>Women</p></MenuLink>
                <MenuLink to='/all-shoes'><p>All Shoes</p></MenuLink>
            </div>
            <div>
                <MenuLink to='/membership'><button className='nav-btn'>Join us</button></MenuLink>
                <MenuLink to='/sign-in'><button className='nav-btn'>Sign in</button></MenuLink> 
            </div>
        </div>
        
    }

    return (
        <Wrapper>
            <div className='mobile-nav'>
                <span>
                    <GiHamburgerMenu 
                        size={30}
                        onClick={() => setShowMenu(!showMenu)} //toggles menu open and closed
                    />
                </span>
                {menu}
            </div>
            <div className='desktop-nav'>
                <div className='menu-left'>
                    <MenuLink to='/'><p>Home</p></MenuLink>
                    <MenuLink to='/new-releases'><p>New Releases</p></MenuLink>
                    <MenuLink to='/men-shoes'><p>Men</p></MenuLink>
                    <MenuLink to='/women-shoes'><p>Women</p></MenuLink>
                    <MenuLink to='/all-shoes'><p>All Shoes</p></MenuLink>
                </div>
                <div className='menu__btns'>
                    {cart.length > 0 ? 
                <div>
                <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                <Link to='/cart'>
                    <div className='cart-notifications'>
                    <span className='cart-item-num'>{cart.length}</span>
                    </div>
                </Link>
                </div>
                    :
                <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                }
                <MenuLink to='/membership'><button className='nav-btn'>Join us</button></MenuLink>
                <MenuLink to='/sign-in'><button className='nav-btn'>Sign in</button></MenuLink> 
            
                </div>
            </div>
          </Wrapper>
    )
}

export default Navigation;

const Wrapper = styled.nav`


.mobile-nav {
    display: flex;
    //display: none;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  .desktop-nav {
      display: none;
  }

  .mobile-nav-items {
    background-color: white;
    width: 100vw;
    position: absolute;
    margin-top: 50px;
    padding: 40px 0 60px 0;
    top: 0;
    right: 0;
    z-index: 1;
  }
    
p, .nav-btn {
    margin: 0;
}
  .menu__btns {
    display: flex;
    position: relative;
  }

 .cart-notifications {
    position: absolute;
    left: 30px;
    top: -12px;
    background-color: crimson;
    color: white;
    border-radius: 50%;
    text-align: center;
    height: 25px;
    width: 25px;

  }

  .cart-item-num {
    font-size: 12px;
  }
  @media only screen and ${breakpoint.device.tablet} {
    // .desktop-nav {
    //     display: block;
    //     display: flex;
    //     max-width: 1920px;
    //     margin: 0 auto;
    //     padding: 0;  
    // }
  }

  @media only screen and ${breakpoint.device.desktop} {

      .mobile-nav {
          display: none;
      }

    .desktop-nav {
        display: block;
        display: flex;
        max-width: 1920px;
        margin: 0 auto;
        padding: 0 20px;  
    }
    .menu-left {
        display: flex;
        //margin: 0 auto
        margin-top: 10px;
    }

    .cart-notifications {
        position: absolute;
        left: 30px;
        top: -11px;
        background-color: crimson;
        color: white;
        border-radius: 50%;
        text-align: center;
        height: 25px;
        width: 25px;
    
      }
    
}
`
const MenuLink = styled(Link)`
    text-decoration: none;
    color: #131921;
    padding: 0 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;


    @media only screen and ${breakpoint.device.desktop} {
      

    }
  `