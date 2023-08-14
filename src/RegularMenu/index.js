import React from "react";
import './style.css'

const RegularMenu = ()=>{
    return(
        <div>
            <div className="menu-heading">
                <div>
                    <h1>Our <span className="regular">Regular</span> Menu</h1>
                </div>
                <div>
                    <p>These Are Regular Menus. You Can<br/>Order Anything You Like.</p>
                    <button>See All</button>
                </div>
            </div>
            <div className="menu">

                <div className="regular-menu">
                    <div className="menu-item">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/chicken-burger.jpeg'} alt="sandwich" />
                        </div>
                        <div>
                            <h3>Chicken Burger</h3>
                            <div>
                            </div>
                            <div>
                                <h2>$ 3.50</h2>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/chicken-pizza.jpeg'} alt="sandwich" />
                        </div>
                        <div>
                            <h3>Chicken Pizza</h3>
                            <div>

                            </div>
                            <div>
                                <h2>$ 3.50</h2>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/chicken-fry.jpeg'} alt="sandwich" />
                        </div>
                        <div>
                            <h3>Chicken Fry</h3>
                            <div>

                            </div>
                            <div>
                                <h2>$ 3.50</h2>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="regular-menu">
                        <div className="menu-item">
                            <div>
                                <img src={process.env.PUBLIC_URL + '/grill-sandwich.jpeg'} alt="sandwich" />
                            </div>
                            <div>
                                <h3>Grill Sandwich</h3>
                                <div>
                                </div>
                                <div>
                                    <h2>$ 3.50</h2>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <img src={process.env.PUBLIC_URL + '/Taco Traifi.jpeg'} alt="sandwich" />
                            </div>
                            <div>
                                <h3>Taco Traifi</h3>
                                <div>

                                </div>
                                <div>
                                    <h2>$ 3.50</h2>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <img src={process.env.PUBLIC_URL + '/NoddlesRamen.jpeg'} alt="sandwich" />
                            </div>
                            <div>
                                <h3>Noodle's Ramen</h3>
                                <div>

                                </div>
                                <div>
                                    <h2>$ 3.50</h2>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            <div className="offers">
                <div className="offers-1" >
                    <img src={process.env.PUBLIC_URL + '/burger-offer.jpeg'} alt="sandwich" />
                </div>
                <div className="offers-2"> 
                    <img src={process.env.PUBLIC_URL + '/offer-2.jpeg'} alt="sandwich" />
                    <img src={process.env.PUBLIC_URL + '/tacos-offer.jpeg'} alt="sandwich" />
                </div>
            </div>
        </div>
        
    );
}
export default RegularMenu