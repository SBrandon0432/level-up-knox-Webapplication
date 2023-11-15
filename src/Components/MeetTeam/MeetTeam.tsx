import { useContext } from "react";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./MeetTeamS.scss";
import { OurStory } from "./OurStory/OurStory";
import { TeamMembers } from "./TeamMembers/TeamMembers";

export const MeetTeam = () => {
    const { employeeCards } = useContext(MyLevelUpContext);
    return (
        <div className="MeetTeam">
            <OurStory />
            <TeamMembers employees={employeeCards} />
        </div>
    );
};
