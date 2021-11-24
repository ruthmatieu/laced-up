import React from "react";
import { Link } from "react-router-dom";

const ShippingBanner = () => {
    return (
        <div className="py-4 text-center" style={{ backgroundColor: "#F7F7F7" }}>
            <p className="m-0 uppercase text-sm">Free shipping & 60-Day Free returns</p>
            <Link to='/membership' className="text-xs underline text-black">Join Now</Link>
        </div>
    )
};

export default ShippingBanner;