import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return <>
        <NavLink to="/contact" style={{textDecoration:"none",color:"black"}}>
            <div className="card" style={{ width: "20rem", margin: "2.2em",textDecoration:"none"}}>
                <img className="card-img-top" src={props.img} alt="" style={{ width: "100%", height: "35vh" }} />
                <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title">{props.tit}</h5>
                    <p className="card-text">{props.ab}</p>
                </div>
            </div>
        </NavLink>

    </>
}
export default Card;