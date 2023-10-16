import { Card } from "react-bootstrap";
import "./PhoneNumbersS.scss";

export const PhoneNumbers = () => {
    return (
        <Card className="PhoneNumbers">
            <Card.Header>
                <div className="header">Phone Numbers</div>
            </Card.Header>
            <Card.Body className="numbers">
                <div className="store">
                    <div>Level Up Games: </div>
                    <div className="number">(865) 332-0041</div>
                </div>

                <div className="store">
                    <div>Turn One Gaming: </div>
                    <div className="number">(865) 298-5236</div>
                </div>
            </Card.Body>
        </Card>
    );
};
