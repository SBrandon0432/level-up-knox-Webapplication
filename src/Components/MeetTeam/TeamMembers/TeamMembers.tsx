import { EmployeeCardProps } from "../../Context/types";
import { TeamMember } from "../TeamMember/TeamMember";
import "./TeamMembersS.scss";

interface Props {
    employees: EmployeeCardProps[];
}

export const TeamMembers = ({ employees }: Props) => {
    let num = 0;
    return (
        <div className="TeamMembers">
            <div className="title">
                <h1>Meet Our Team</h1>
            </div>
            <div className="team">
                {employees.map((employee, index) => {
                    const el = (
                        <TeamMember
                            employee={employee}
                            placement={num}
                            key={index}
                        />
                    );
                    if (num === 2) {
                        num = 0;
                    } else {
                        num += 1;
                    }

                    return el;
                })}
            </div>
        </div>
    );
};
