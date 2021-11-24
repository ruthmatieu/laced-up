import React from 'react';
import { useParams } from "react-router-dom";
import { Link} from 'react-router-dom';
import ShippingBanner from "../components/nav/ShippingBanner";
import Nav from "../components/nav";
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Footer from '../components/footer';

const ShoeItem = ({addToCart, cartItems, data}) => {
    //console.log(props.products.id)
    const params = useParams();

    const shoe = data.find(item => `${item.id}` === params.id);

    document.title = `LacedUp | ${shoe.name}`;
    
  console.log("shoe info: ", shoe)
    
    return (

    <div>
        <Nav/>
        <ShippingBanner/>
        <Container className="pt-14">
            <div className="w-full lg:flex lg:space-x-14 xl:space-x-20">
                <div className="pb-8 lg:hidden">
                    <p className="font-medium m-0 text-2xl">{shoe.name}</p>
                    <p className="font-semibold m-0 pb-4">{shoe.category}</p>
                    <p className="font-semibold m-0">${shoe.price}</p>
                    </div>
                <div className="image-div" >
                    <img src={shoe.image} alt={shoe.name}/>
                </div>
                <div className="info-div" >
                    <div className="pb-8 hidden lg:block">
                        <p className="font-medium m-0 text-2xl">{shoe.name}</p>
                        <p className="font-semibold m-0 pb-4">{shoe.category}</p>
                        <p className="font-semibold m-0">${shoe.price}</p>
                    </div>
                    <div className="grid place-items-center lg:place-items-start mb-8 mt-10 lg:mt-0">
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                            <Link to="/">
                                <button className="btn1">Add to Cart</button>
                            </Link>
                            <Link to="/">
                                <button className="btn2">Favorite</button>
                            </Link>
                        </div>
                    </div>
                    <div className="pb-8">
                        <h4 className="font-semibold pb-2">Shipping*</h4>
                        <p>To get accurate shipping information <span className="underline font-semibold">Edit Location</span></p>
                    </div>
                    <div className="pb-8">
                        <h4 className="font-semibold pb-2">Free Pickup</h4>
                        <p className="underline font-semibold pb-3">Find a Store</p>
                        <p className="text-sm text-gray-400">* Faster shipping options may be available</p>
                    </div>
                    <div>
                        <p className="pb-6">Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air 
                            experience that offers premium stability and unbelievable cushioning. 
                            Featuring the OG's wavy design lines, plastic accents and airy fabric 
                            on the upper, it celebrates defiant style.</p>
                        <ul>
                            <li>Shown: Sail/Total Orange/Gum Medium Brown</li>
                            <li>Style: CK6954-353</li>
                        </ul>
                        <p className="underline font-semibold pt-6">View Product Details</p>
                    </div>
                </div>
            </div>
        </Container>
        <Footer/>
            
        </div>
    )
}

export default ShoeItem;


const MobileContainer = styled.div`
    max-width: 1800px;
    margin: 0 auto;

    @media only screen and ${breakpoint.device.md} {
        //background-color: red;
       
        .mobile-desc {
            display: none;
            background-color: red;
        }
    }
`

const Container = styled.div`
    max-width: 1800px;
    margin: 0 auto;

    img {
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    .info-div {
        margin: 0;
    }

    .btn1 {
        border: none;
        background-color: #111;
        font-size: 15px;
        color: #FFF;
        height: 3rem;
        border-radius: 25px;
        width: 15rem;
    }

    .btn1:hover {
        background-color: #404040;
    }

    .btn2 {
        border: 1px solid gray;
        background-color: #FFF;
        font-size: 15px;
        color: #111;
        height: 3rem;
        border-radius: 25px;
        width: 15rem;
    }

    .btn2:hover {
        background: rgba(255, 255, 255, .6) 
    }

    @media only screen and ${breakpoint.device.md} {
        //background-color: yellow;
    }
  
    @media only screen and ${breakpoint.device.lg} {
        //background-color: red;
        img {
            width: 100%;
        }
        .image-div {
            width: 600px;
            //background-color: pink;
        }
    
        .info-div {
            width: calc(100% - 600px);
            //background-color: cyan;
        }

        .btn1 {
            height: 3rem;
            width: 10rem;
        }
    
        .btn2 {
            height: 3rem;
            width: 10rem;
        }
  }

  @media only screen and ${breakpoint.device.xl} {
        //background-color: orange;

        .btn1 {
            height: 3rem;
            width: 15rem;
        }
    
        .btn2 {
            height: 3rem;
            width: 15rem;
        }
  }
`;