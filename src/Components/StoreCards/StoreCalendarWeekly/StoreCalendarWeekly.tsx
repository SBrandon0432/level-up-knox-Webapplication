import { Card } from "react-bootstrap";
import { Calender } from "../../Context/types";
import { StoreCalendarDay } from "./StoreCalendarDay/StoreCalendarDay";
import "./StoreCalendarWeeklyS.scss";

interface Props {
    week: Calender[];
    name: string;
}

export const StoreCalendarWeekly = ({ week, name }: Props) => {
    return (
        <Card className="StoreCalendarWeekly">
            <Card.Header className="header">
                <Card.Title className="title">
                    Weekly {name} Calendar
                </Card.Title>
            </Card.Header>
            <Card.Body className="week">
                {week.map((day, index) => {
                    return <StoreCalendarDay key={index} currentDay={day} />;
                })}
            </Card.Body>
        </Card>
    );
};
