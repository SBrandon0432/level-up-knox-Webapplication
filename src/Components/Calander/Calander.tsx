import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./CalenderS.scss";

export const Calender = () => {
    const { storeCards } = useContext(MyLevelUpContext);

    return (
        <div className="MeetTeam">
            <div className="calender">
                {storeCards.map((store, index) => {
                    const { calender, name } = store;
                    return (
                        <div className="store">
                            <h1 className="title">{name} Weekly events</h1>
                            <div className="cards">
                                {calender.map((event, idx) => {
                                    const { day, events } = event;
                                    return (
                                        <Card className="card">
                                            <Card.Header className="day">
                                                {day}
                                            </Card.Header>
                                            <Card.Body>
                                                {events.map((item) => {
                                                    const { title, startTime } =
                                                        item;
                                                    return (
                                                        <div className="info">
                                                            <div className="eventName">
                                                                {title}
                                                            </div>
                                                            <div>
                                                                {startTime && (
                                                                    <div>
                                                                        @
                                                                        {
                                                                            startTime
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
