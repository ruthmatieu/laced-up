import React from "react";
import Navigation from "../nav";
import ShippingBanner from "../nav/ShippingBanner";
import Homepage from "../homepage";
import Footer from "../footer";

const Container = () => {

    return (
        <div>
            <Navigation/>
            <div className="m-0 px-5 box-border w-full" style={{ maxWidth: '1800px', margin: '0 auto', overflowX: 'hidden'}}>
                <ShippingBanner/>
                <Homepage/>
            </div>
            <div className="m-0 box-border w-full" style={{ margin: '0 auto', overflowX: 'hidden'}}>
                <Footer/>
            </div>
        </div>

    )
}

export default Container;