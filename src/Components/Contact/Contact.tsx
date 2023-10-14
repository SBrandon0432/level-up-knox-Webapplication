import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ContactS.scss";

export const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Contact">
            <div onClick={handleShow} className="tab">
                Contact
            </div>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="title">Contact & Socials</div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="item">item</div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
