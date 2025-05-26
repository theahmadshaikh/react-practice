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
                    <li className="nav-links"><a href="#home">Home</a></li>
                    <li className="nav-links"><a href="#about">About</a></li>
                    <li className="nav-links"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}