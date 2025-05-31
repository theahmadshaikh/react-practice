import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

export default function Header (){
    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src={LOGO_URL} alt="Logo" />
                </a>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li className="nav-links"><Link to="/">Home</Link></li>
                    <li className="nav-links"><Link to="/about">About</Link></li>
                    <li className="nav-links"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}