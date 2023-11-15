import { Card } from "react-bootstrap";
import "./MissionS.scss";

export const Mission = () => {
    return (
        <div className="Mission">
            <Card className="mission-card">
                <Card.Body>
                    <Card.Text className="mission">
                        Our mission is to be a boon to the communities we do
                        business in and bring nerds, gamers, and hobbyists
                        together!
                    </Card.Text>
                    <Card.Text className="steven">- Owner Stephen</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
