import React from 'react'
import { NavLink } from "react-router-dom";
import Foot from "./Footer";
import skks from "../src/images/cnt2.jpg"


const HomeComponent = (props)=>{
    return<>
    <div className="mainwe1">
                <div className="secwe1s">
                    <div className="mainpageH12"><h1 className="mainh, line-height">{props.gro} <span className="tit"><strong>{props.lo}</strong></span></h1>
                        <h5 className="mainh3">{props.te}</h5>
                        <NavLink to={props.to}><a className="btn btn-primary bt" ><strong>{props.but}</strong></a></NavLink></div>
                </div>
            <Foot logo="TECHSmartzz"
            copy="copyright ©"/>
        </div>
    </>
}

export default HomeComponent;