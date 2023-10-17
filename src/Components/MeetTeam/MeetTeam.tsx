import { useContext } from "react";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./MeetTeamS.scss";
import { TeamMembers } from "./TeamMembers/TeamMembers";

export const MeetTeam = () => {
    const { employeeCards } = useContext(MyLevelUpContext);
    return (
        <div className="MeetTeam">
            <TeamMembers employees={employeeCards} />
        </div>
    );
};
