import { Button, Card, Container } from "react-bootstrap";
import { StoreCardProps } from "../Context/types";
import "./StoreCardS.scss";

interface Props {
    card: StoreCardProps;
}

export const StoreCard = ({ card }: Props) => {
    const { icon, location, locationHerf, calender, name, subText } = card;

    return (
        <Card className="StoreCard">
            <Card.Img src={icon} className="icon" />
            <div className="Card-body">
                <Card.Body>
                    <Container>
                        <Card.Title className="Title">{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {subText}
                        </Card.Subtitle>
                    </Container>

                    <Container className="buttonGroup">
                        <Button
                            href={locationHerf}
                            className="cardButton"
                            variant="outline-primary"
                        >
                            Find Us{" "}
                        </Button>
                        <Button
                            className="cardButton"
                            variant="outline-primary"
                        >
                            Calendar
                        </Button>
                    </Container>
                </Card.Body>
            </div>
        </Card>
    );
};
