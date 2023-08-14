import React from "react";
import './style.css';

const Home = () =>{
    return(
        <div>
            <div className="home-section">
                <div className="home-section-2">
                    <h1>
                        All Fast Food is <br/> Available at Foodie
                    </h1>
                    <div>
                        <p>We are Just A Click Away When You <br/> Crave For Delicious Fast Food</p>
                    </div>
                    <div className="buying-buttons">
                        <button className="buttons">Buy Now</button>
                        <button>How To Order</button>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/sandwich-egg.png'} alt="sandwich" />
                </div>
            </div>
            <div className="about-delivery">
                <div className="about-delivery-1">
                    <div>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>Fast Delivery</h2>
                        <p>The Food Will Be Delivered To<br/> Your Home Within 1-2 Hours Of Your Ordering.</p>
                    </div>
                </div>
                <div className="about-delivery-1">
                    <div>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>Fresh Food</h2>
                        <p>The Food Will Be Delivered<br/>100% Fresh To Your Home.<br/>We Do Not Deliver Stale Food.</p>
                    </div>
                </div>
                <div className="about-delivery-1">
                    <div>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>Free Delivery</h2>
                        <p>Your Food Delivery Is Absolutely Free.<br/>No Cost Just Order And Enjoy</p>
                    </div>
                </div>
            </div>
        </div>
    );  
}
export default Home