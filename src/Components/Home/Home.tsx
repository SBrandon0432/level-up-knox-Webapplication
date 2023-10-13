import { Container } from "react-bootstrap";

import { Mission } from "../Mission/Mission";
import { StoreCards } from "../StoreCards/StoreCards";
import { StoreImages } from "../StoreImages/StoreImages";
import "./HomeS.scss";

export const Home = () => {
    return (
        <div className="Home">
            <Container className="storeCards-container">
                <StoreCards />
            </Container>
            <Container className="storeImages-container">
                <StoreImages />
                <Mission />
            </Container>
        </div>
    );
};
