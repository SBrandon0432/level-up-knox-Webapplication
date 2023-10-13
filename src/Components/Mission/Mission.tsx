import { Card } from "react-bootstrap";
import "./MissionS.scss";

export const Mission = () => {
    return (
        <div className="Mission">
            <Card className="mission-card">
                <Card.Body>
                    <Card.Text className="mission">
                        Our mission at Level up and Turn One Gaming, is to
                        empower our beloved communities and the people that make
                        our communities beloved.
                    </Card.Text>
                    <Card.Text className="steven">
                        - CEO & Founder Steven
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
