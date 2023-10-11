import { Button, Card, Container } from "react-bootstrap";
import { StoreCardProps } from "../Context/types";
import "./StoreCardS.scss";
import { StoreInformation } from "./StoreInformation/StoreInformation";

interface Props {
    card: StoreCardProps;
}

export const StoreCard = ({ card }: Props) => {
    const { icon } = card;

    return (
        <Card className="StoreCard">
            <Card.Img src={icon} className="icon" />
            <div className="Card-body">
                <Card.Body>
                    <StoreInformation card={card} />

                    <Container>
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
