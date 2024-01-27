import {Link} from "react-router-dom";
import  Style  from "../LandingPage/LandingPage.module.scss";


const LandingPage = () => {
    return (
        <div className={Style.landing}>
            
            <h5 className={Style.text}>Pokemon World</h5>
            <Link to="/home"><button className={Style.button}>GET IN</button></Link>
        </div>
    )
}

export default LandingPage;