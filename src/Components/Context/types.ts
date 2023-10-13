export interface StoreImages {
    image: string;
    name: string;
}

export interface StoreCardProps {
    icon: string;
    location: string;
    locationHerf: string;
    calender: Calender[];
    name: string;
    subText: string;
    hours: HoursProps[];
}

export interface EmployeeCard {
    image: string;
    hobby: string;
    position: string;
    about: string;
}

export interface Calender {
    day: string;
    events: Event[];
}

export interface Event {
    title: string;
    startTime?: string;
    description?: string;
}

export interface HoursProps {
    day: string;
    open: string;
    closed: string;
}
