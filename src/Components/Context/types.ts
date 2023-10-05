export interface StoreImages {
    image: string;
    name: string;
}

export interface StoreCard {
    icon: string;
    location: string;
    locationHerf: string;
    calender: Calender[];
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
    startTime: string;
    description?: string;
}
