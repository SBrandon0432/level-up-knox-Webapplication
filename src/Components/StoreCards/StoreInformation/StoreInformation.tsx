import { Card, Container } from "react-bootstrap";
import locationIcon from "../../../Assets/Svgs/google-maps-svgrepo-com.svg";
import { StoreCardProps } from "../../Context/types";
import "./StoreInformationS.scss";

interface Props {
    card: StoreCardProps;
}

export const StoreInformation = ({ card }: Props) => {
    const { location, locationHerf, name, subText } = card;

    return (
        <Container className="StoreInformation">
            <Card.Title className="Title">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subText}</Card.Subtitle>
            <Container>
                <a href={locationHerf} className="location-container">
                    <img
                        src={locationIcon}
                        className="locationIcon"
                        alt="icon"
                    />
                    <div className="location">{location}</div>
                </a>
            </Container>
        </Container>
    );
};
