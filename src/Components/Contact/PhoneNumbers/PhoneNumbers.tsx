import { useContext } from "react";
import { Badge, Card } from "react-bootstrap";
import { MyLevelUpContext } from "../../Context/MyLevelUpContext";
import { storeOpenStatus } from "../../Utilities/storeOpenState";
import "./PhoneNumbersS.scss";

export const PhoneNumbers = () => {
    const { storeCards } = useContext(MyLevelUpContext);
    const isopen = storeOpenStatus();

    return (
        <Card className="PhoneNumbers">
            <Card.Header>
                <div className="header">Phone Numbers</div>
            </Card.Header>
            <Card.Body className="numbers">
                {storeCards.map(({ hours, phone, name }, index) => {
                    return (
                        <div className="store" key={name}>
                            <div className="name">{name}</div>
                            <div className="number">{phone}</div>
                            <Badge
                                bg={isopen ? "success" : "danger"}
                                className="isopen"
                            >
                                {isopen ? "Open" : "Closed"}
                            </Badge>
                        </div>
                    );
                })}

                <Card.Text className="text">
                    Please Reach out to us for questions or issues, we at Level
                    up and Turn One Gaming are happy to help with any issues or
                    concerns.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
