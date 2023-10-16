// needed to style inline as sass wont effect the popover
import { useState } from "react";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { HoursProps } from "../../Context/types";
import { storeOpenStatus } from "../../Utilities/storeOpenState";
import { Hours } from "./Hours/Hours";
import "./StoreHoursS.scss";

interface Props {
    hours: HoursProps[];
    placement: any;
}

export const StoreHours = ({ hours }: Props) => {
    const [status] = useState(storeOpenStatus());

    return (
        <div className="StoreHours">
            <OverlayTrigger
                placement={"right"}
                delay={{ show: 250, hide: 400 }}
                overlay={
                    <Popover id="popover-contained" placement={"right"}>
                        <Popover.Header
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Badge
                                bg={status[0]}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    paddingBottom: "0rem",
                                    width: "5rem",
                                }}
                            >
                                <h6>{status[1]}</h6>
                            </Badge>
                        </Popover.Header>
                        <Hours hours={hours} />
                    </Popover>
                }
            >
                <Button className="cardButton" variant="outline-primary">
                    Store Hours
                </Button>
            </OverlayTrigger>
        </div>
    );
};
