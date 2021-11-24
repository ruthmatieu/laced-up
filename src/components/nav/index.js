import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrCart } from 'react-icons/gr';
import logo from "../../images/logo.png";
import styled from "styled-components";


const Navigation = ({ cart }) => {
    //toggle state of responsive menu - mobile set to false
    const [showMenu, setShowMenu] = useState(false);

    let menu
    console.log('cart length: ',cart)

    if(showMenu) {
        menu = 
        <div className='bg-red-100 w-full absolute mt-6 pt-2 pb-4 top-0 right-0 lg:hidden'>
            <div>
                <MenuLink to='/'><p className='menu-item'>Home</p></MenuLink>
                <MenuLink to='/new-releases'><p className='menu-item'>New Releases</p></MenuLink>
                <MenuLink to='/men-shoes'><p className='menu-item'>Men</p></MenuLink>
                <MenuLink to='/women-shoes'><p className='menu-item'>Women</p></MenuLink>
                <MenuLink to='/all-shoes'><p className='menu-item'>All Shoes</p></MenuLink>
                <MenuLink to='/all-shoes'><p className='menu-item'>mobile</p></MenuLink>

            </div>
            <div>
                <MenuLink to='/membership'>
                    <button
                        border= "none"
                        backgroundColor= "#000"
                        fontSize= "0.75rem"
                        color= "#FFF"
                        height= "2.5rem"
                        onClick={() => console.log('shop btn clicked')}
                        radius= "25px"
                        width= "6rem"
                    >Join Us</button>
                </MenuLink>
                <MenuLink to='/sign-in'>
                    <button
                        border= "none"
                        backgroundColor= "#000"
                        fontSize= "0.75rem"
                        color= "#FFF"
                        height= "2.5rem"
                        onClick={() => console.log('shop btn clicked')}
                        radius= "25px"
                        width= "6rem"
                    >Sign In</button>
                </MenuLink> 
            </div>
        </div>
        
    }
    return (
        <nav className="flex justify-between py-6 items-center m-0 px-5 box-border w-full" style={{ maxWidth: '1800px', margin: '0 auto', overflowX: 'hidden'}}>
            {/* mobile menu icon */}
            <div className='flex justify-between relative z-10'>
                <Link to='/'><img src={logo} alt="logo" style={{width: '55px', height: '55px'}}/></Link>
                <span>
                    <GiHamburgerMenu 
                        className='hover:pointer lg:hidden'
                        size={30}
                        onClick={() => setShowMenu(!showMenu)} //toggles menu open and closed
                    />
                </span>
                {menu}
            </div>
            <div className='hidden lg:block lg:flex lg:justify-between'>
                <div className='flex items-center'>
                    <MenuLink to='/new-releases'><p className='menu-item'>New Releases</p></MenuLink>
                    <MenuLink to='/men-shoes'><p className='menu-item'>Men</p></MenuLink>
                    <MenuLink to='/women-shoes'><p className='menu-item'>Women</p></MenuLink>
                    <MenuLink to='/kids-shoes'><p className='menu-item'>Kids</p></MenuLink>
                    <MenuLink to='/gifts'><p className='menu-item'>Gifts</p></MenuLink>
                </div>
                <div className='flex ml-14'>
                    {/* display cart notification if items in cart are more than 0 */}
                    {1 > 0 ? 
                    <div className="relative">
                        <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                        <Link to='/cart'>
                            <CartIcon>
                                <span className='cart-item-num'>1</span>
                            </CartIcon>
                        </Link>
                    </div>
                        :
                    <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                    }
                    <div className="mt-4 -space-x-4">
                        <MenuLink to='/membership'>
                            <button className="cta-btn">Join Us
                            </button>
                        </MenuLink>
                        <MenuLink to='/sign-in'>
                            <button className="cta-btn">Sign In
                            </button>
                        </MenuLink> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;

const CartIcon = styled.div`
    position: absolute;
    left: 45%;
    top: 16%;
    background-color: crimson;
    color: white;
    border-radius: 50%;
    text-align: center;
    height: 25px;
    width: 25px;
    
    .cart-item-num {
        font-size: 12px;
    }
`

const MenuLink = styled(Link)`
    text-decoration: none;
    color: #131921;
    padding: 0 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;

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
`