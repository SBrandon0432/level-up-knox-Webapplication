import { Card } from "react-bootstrap";
import { EmployeeCardProps } from "../../Context/types";
import "./TeamMemberS.scss";

interface Props {
    employee: EmployeeCardProps;
    placement: number;
}

export const TeamMember = ({ employee, placement }: Props) => {
    const { name, image, hobby, position, about } = employee;

    return (
        <Card className={`flip-card placement-${placement}`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="/" className="img" />
                </div>
                <div className="flip-card-back">
                    <h1 className="name">{name}</h1>
                    <div className="text">{position}</div>
                    <div className="text">Favorite Hobby: {hobby}</div>
                    <div className="text">{about}</div>
                </div>
            </div>
        </Card>
    );
};
