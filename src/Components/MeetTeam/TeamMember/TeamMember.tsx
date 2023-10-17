import { Card } from "react-bootstrap";
import { EmployeeCardProps } from "../../Context/types";
import "./TeamMemberS.scss";

interface Props {
    employee: EmployeeCardProps;
    placement: number;
}

export const TeamMember = ({ employee, placement }: Props) => {
    const { name, image, hobby, position } = employee;

    return (
        <Card className={`flip-card placement-${placement}`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="/" className="img" />
                </div>
                <div className="flip-card-back">
                    <h1>{name}</h1>
                    <p>{position}</p>
                    <p>Favorite Hobby: {hobby}</p>
                    <p>" Do or do not, there is not Try " - yoda</p>
                </div>
            </div>
        </Card>
    );
};
