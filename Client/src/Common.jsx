import React from "react";
import { NavLink } from "react-router-dom";
import Foot from "./Footer";

const CommonPageComponent=(props)=>{
    return<>
    <div className="main">
            <div className="conts">
                <div className="sec1">
                    <div className="mainpageH"><h1 className="mainh">{props.gro} <span className="tit"><strong>{props.lo}</strong></span></h1>
                        <h5 className="mainh3">{props.te}</h5>
                        <NavLink to={props.to}><a className="btn btn-primary bt" ><strong>{props.but}</strong></a></NavLink></div>
                </div>
                <div className="sec2">
                    <img src={props.im} alt="oops" className={props.clss} />
                </div>
            </div>
            <Foot logo="TECHSmartzz"
            copy="copyright ©"/>
        </div>
    </>
}
export default CommonPageComponent;