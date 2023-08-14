import React from "react";
import './style.css';

const DeliveredCategories = () =>{
    return(
        <div className="delivery-categories">
            <div>
                <div>
                    <h1>Best <span className="delivered">Delivered</span><br/>Categories</h1>
                </div>
                <div>
                    <p>Here Are Some Of Our Best Distributed<br/>Categories. If You Want You Can Order<br/>From Here.</p>
                </div>
            </div>
            <div className="best-deliveries">
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/burger-2.png'} alt="sandwich" />
                    </div>
                    <div>
                        <h3>Chicken Burger</h3>
                        <p>Order Now</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/burger-1.png'} alt="sandwich" />
                    </div>
                    <div>
                        <h3>Chicken Burger</h3>
                        <p>Order Now</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/fries-1.png'} alt="sandwich" />
                    </div>
                    <div>
                        <h3>Chicken Burger</h3>
                        <p>Order Now</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default DeliveredCategories