import { Container, Popover } from "react-bootstrap";
import { HoursProps } from "../../../Context/types";
import "./HoursS.scss";

interface Props {
    hours: HoursProps[];
}

export const Hours = ({ hours }: Props) => {
    return (
        <Popover.Body className="Hours">
            {hours.map((time, index) => {
                const { day, open, closed } = time;
                return (
                    <Container className="times" key={index}>
                        <div className="day">{day}</div>
                        <div className="openClose">
                            {open} - {closed}
                        </div>
                    </Container>
                );
            })}
        </Popover.Body>
    );
};
