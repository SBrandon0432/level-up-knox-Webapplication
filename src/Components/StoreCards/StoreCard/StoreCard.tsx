import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { StoreCardProps } from "../../Context/types";
import { StoreCalendarWeekly } from "../StoreCalendarWeekly/StoreCalendarWeekly";
import { StoreHours } from "../StoreHours/StoreHours";
import { StoreInformation } from "../StoreInformation/StoreInformation";
import "./StoreCardS.scss";

interface Props {
    card: StoreCardProps;
}

export const StoreCard = ({ card }: Props) => {
    const { icon, calender, name, hours } = card;
    const [showCal, setShowCal] = useState<boolean>(false);

    return (
        <div>
            {showCal && <StoreCalendarWeekly week={calender} name={name} />}
            <Card className="StoreCard">
                <Card.Img src={icon} className="icon" />
                <div className="Card-body">
                    <Card.Body>
                        <StoreInformation card={card} />
                        <Container className="Buttons">
                            <StoreHours hours={hours} placement="right" />
                            <Button
                                className="cardButton"
                                variant="outline-primary"
                                onClick={() => {
                                    setShowCal(!showCal);
                                }}
                            >
                                {!showCal ? "Weekly Events" : "Hide Events"}
                            </Button>
                        </Container>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};
