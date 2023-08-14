import React from "react";
import './style.css';

const Footer =()=>{
    return (
        <div className="footer">
            <div className="footer-section">
                <div>
                    <h2>Fooodish</h2>
                    <p>Continue Foodish 2023 all rights reserved</p>
                </div>
                <div>
                    <h2>Follow Us On</h2>
                </div>
            </div>
            <div className="footer-section">
                <h2>Menu</h2>
                <p>Home</p>
                <p>Offers</p>
                <p>Service</p>
                <p>About Us</p>
            </div>
            <div className="footer-section">
                <h2>Information</h2>
                <p>Menu</p>
                <p>Quality</p>
                <p>Make a Choice</p>
                <p>Salad With Vegetable</p>
                <p>Fast Delivery</p>
                <p>Subscribe</p>
            </div>
            <div className="footer-section">
                <h2>Contact</h2>
                <p>+123 456 789</p>
                <p>Explore</p>
                <p>Info@Foodish.Com</p>
                <p>123, New York, USA</p>
            </div>
        </div>
    );
}
export default Footer