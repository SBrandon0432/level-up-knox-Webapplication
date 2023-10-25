import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Svgs/onlyLevel.svg";
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
                    Events & About
                </Nav.Link>
                <Contact />
            </div>
        </Navbar>
    );
};
