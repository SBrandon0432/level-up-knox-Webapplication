import { Card } from "react-bootstrap";
import { Calender } from "../../../Context/types";
import "./StoreCalendarDayS.scss";

interface Props {
    currentDay: Calender;
}

export const StoreCalendarDay = ({ currentDay }: Props) => {
    const { day, events } = currentDay;

    return (
        <Card className="StoreCalendarDay">
            <Card.Header className="day">{day}</Card.Header>
            <Card.Body>
                {events.map((event, index) => {
                    const { title, startTime } = event;
                    return (
                        <div key={index} className="event">
                            {title}: {startTime}
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};
