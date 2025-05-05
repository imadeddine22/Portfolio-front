import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
    return (
        <div className="list">
            <div className="navbar">
            <a href="" className="logo">Imad dev</a>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
                </div>
        </div>
    );
}
export default Navbar;