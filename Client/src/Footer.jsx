import react from "react"
import LinkedIn  from "@mui/icons-material/LinkedIn";
import Github  from "@mui/icons-material/GitHub";

const Foot = (props) => {
    return <>
        <div className="fooot" ><div><span className="flo">{props.logo}</span> <span>{props.copy}{new Date().getFullYear()}</span></div><div><LinkedIn className="icon" to="" onClick={() => window.open('https://www.linkedin.com/in/abhi-singh-0239591a3')}/><Github className="icon" to="" onClick={() => window.open('https://github.com/AbhiSingh58')}/></div></div>
    </>
}
export default Foot;