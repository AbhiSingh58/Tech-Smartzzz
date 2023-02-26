import React, { useState, useEffect } from "react";
import img from "../src/images/cnt2.jpg"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Contact = () => {
    const initialState = {
        name: "",
        phone: "",
        email: "",
        msg: ""
    }
    const [cuurval, updateval] = useState(initialState);

    const chngval = (event) => {

        event.preventDefault();
        const { name, value } = event.target

        updateval((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }

    const saveData = async (e) => {
        e.preventDefault();
        if (cuurval.email && cuurval.msg && cuurval.name && cuurval.phone) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cuurval.email)) {
                alert('Incorrect email format. Please add a valid E-mail address')
            }
            else {
                await axios({
                    method: 'post',
                    url: 'https://tech-smartzz-api.onrender.com',
                    data: JSON.stringify(cuurval),
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then((res) => {
                    if (res.status === 200 && res.statusText === 'OK') {
                        alert("Thanks for your inquiry. We'll contact you shortly")
                    }
                    updateval(initialState)
                })
                
            }
        }
        else {
            alert("All the fields are required. Please fill the remaining one's")
        }
    }

    return <>
        <div style={{ height: "91vh", display: "flex", flexDirection: "column" }}>
            <div className="maiiin" style={{ border: "", height: "100%", display: "flex", justifyContent: "center", textAlign: "center", backgroundColor: "#e7e7e7" }}>

                <div className="cntpic"><img src={img} alt="" style={{ width: "100%", height: "100%", padding: "2em" }} /></div>
                <div className="cntpic2" >
                    <h2 style={{ color: "rgb(122 121 121)" }}>Better Together !!</h2>
                    <p style={{ color: "rgb(122 121 121)" }}>Get in touch by completing the form below</p>
                    <div className="form">
                        <TextField
                            id="outlined-textarea"
                            label="Name"
                            name="name"
                            onChange={chngval}
                            value={cuurval.name}
                            multiline
                            className="boxtxt"
                            style={{ marginTop: "1em" }}
                            required={true}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Phone"
                            name="phone"
                            onChange={chngval}
                            value={cuurval.phone}
                            type={'number'}
                            multiline
                            className="boxtxt"
                            required
                            style={{ marginTop: "1em" }}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            name="email"
                            onChange={chngval}
                            value={cuurval.email}
                            multiline
                            className="boxtxt"
                            type={'email'}
                            required
                            style={{ marginTop: "1em" }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter your query here"
                            multiline
                            rows={4}
                            value={cuurval.msg}
                            onChange={chngval}
                            name="msg"
                            // className="txtfld"
                            style={{ marginTop: "1em" }}
                            required
                        />
                        <Button style={{ color: "rgb(122 121 121)", marginTop: "1em" }} onClick={saveData} type="submit">Submit</Button>
                    </div>

                </div>

            </div>

        </div>
    </>
}
export default Contact;
