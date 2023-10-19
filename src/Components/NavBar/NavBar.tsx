import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Svgs/MainLogoKnox.svg";
import { Paths } from "../../Types/types";
import { Contact } from "../Contact/Contact";
import "./NavBarS.scss";

export const NavBar = () => {
    return (
        <Navbar className="NavBar" fixed="top">
            <Navbar.Brand href={Paths.HOME}>
                <div className="logo">
                    <img src={logo} className="image" alt="logo" />
                </div>
            </Navbar.Brand>
            <div className="tabs">
                <Nav.Link href={Paths.HOME} className="tab">
                    Home
                </Nav.Link>

                <Nav.Link href={Paths.MEETTEAM} className="tab">
                    Meet Our Team
                </Nav.Link>
                <Contact />
            </div>
        </Navbar>
    );
};
