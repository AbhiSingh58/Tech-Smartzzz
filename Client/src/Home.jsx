import React from "react";
import CommonPageComponent from "./Common";
import img from "../src/images/16530554.jpg"

const Home = () => {
    return <><CommonPageComponent gro="Hi there, I'm Abhi Singh 👋,"
        lo="Tech enthusiast with passion to solve problems and to make things."
        te="Self believer and a versatile learner that can get going with any sort of work." 
        but="Get in Touch"
        to="/contact"
        im={img}
        clss="im2"/>
    </>
}
export default Home;