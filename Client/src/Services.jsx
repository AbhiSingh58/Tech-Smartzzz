import React from "react";
import Data from "./Data.jsx"
import Card from "./Card.jsx";

const Services = () => {
    return <>
        <div style={{  textAlign: "center" }} className="" >
            <h2 style={{ border: "none", marginTop: "1em", color: "grey", textDecoration: "" }} className="shd">Services We Provide</h2>
            <div className="boxes " style={{ border: "", display: "flex", paddingLeft: "3em", paddingRight: "3em", flexWrap: "wrap", justifyContent: "space-evenly" ,margin:"1em"}}>
                {Data.map((cuurell) => {
                    return <Card 
                    img={cuurell.imgsrc}
                    tit={cuurell.title}
                    ab={cuurell.about}/>
                })}
            </div>
        </div>
    </>

}
export default Services;