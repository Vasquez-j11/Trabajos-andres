import React from "react";

import '../styleshet/Card2.css';


function Card2(props) {
    return (

        <section>
            <div className="card-cont">
                <img src={require(`../img/${props.img1}.svg`)} alt="" className="hero" />
            </div>
            <div className="h1">
                <h1>Order Sumary</h1>
            </div>
            <div className="parrafo">
                <p>{props.text1}</p>
            </div>
            <div className="Xd">
                <img src={require(`../img/${props.img2}.svg`)} alt="" />

                <div className="p2">
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                </div>
                <a href="#">{props.xxd}</a>
            </div>
        
            <button className="btn1" type="button">Proceed to Payment</button>
            <button className="btn2" type="button">Cancel Order</button>


            


        </section>
    )
}


export default Card2;