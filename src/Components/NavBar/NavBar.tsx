import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Svgs/MainLogoKnox.svg";
import { Contact } from "../Contact/Contact";
import "./NavBarS.scss";

export const NavBar = () => {
    return (
        <Navbar className="NavBar" fixed="top">
            <div className="background"></div>
            <Container>
                <Navbar.Brand href="/home">
                    <div className="logo">
                        <img src={logo} className="image" alt="logo" />
                    </div>
                </Navbar.Brand>
                <div className="tabs">
                    <Contact />
                    <Nav.Link href="/" className="tab">
                        Meet Our Team
                    </Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
};
