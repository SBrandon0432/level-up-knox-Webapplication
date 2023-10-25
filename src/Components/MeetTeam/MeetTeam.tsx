import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./MeetTeamS.scss";
import { OurStory } from "./OurStory/OurStory";

export const MeetTeam = () => {
    const { employeeCards, storeCards } = useContext(MyLevelUpContext);
    return (
        <div className="MeetTeam">
            <OurStory />
            {/*
            100% functional, but client did not want feature after its completion.
            <TeamMembers employees={employeeCards} />
            */}

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
                                                                @{startTime}
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
