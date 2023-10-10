import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Svgs/MainLogoKnox.svg";

import "./NavBarS.scss";

function BrandExample() {
    return (
        <Navbar className="NavBar" fixed="top">
            <Container>
                <Navbar.Brand href="/home">
                    <div className="logo">
                        <img src={logo} className="image" alt="logo" />
                    </div>
                </Navbar.Brand>
                <div className="about-container">
                    <Nav.Link href="/" className="about">
                        Meet Our Team
                    </Nav.Link>
                    <div className="line"></div>
                </div>
            </Container>
        </Navbar>
    );
}

export default BrandExample;
