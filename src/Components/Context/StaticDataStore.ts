import knoxSquareLogo from "../../Assets/Images/levelup-square-logo.pdf-01.png";
import turn1GamingLogo from "../../Assets/Images/Turn1.jpeg";
import { Calender, StoreCardProps } from "./types";

export const calenderLevel: Calender[] = [
    {
        day: "sunday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "monday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "tuesday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "wednesday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "thursday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "friday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "saturday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
];

export const calenderTurn1: Calender[] = [
    {
        day: "sunday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "monday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "tuesday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "wednesday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "thursday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "friday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
    {
        day: "saturday",
        events: [
            {
                title: "DnD",
                startTime: "5:00 pm",
            },
        ],
    },
];

export const StoreCards: StoreCardProps[] = [
    {
        icon: knoxSquareLogo,
        location: " 9315 Kingston Pike, Knoxville, TN 37922 ",
        locationHerf:
            "https://www.google.com/maps/dir//level+up+knoxville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x885c257ad21e4bf5:0xdcfaf515d999cfb5?sa=X&ved=2ahUKEwjglIeg2d-BAxXTmmoFHflSD9oQ9Rd6BAhAEAA&ved=2ahUKEwjglIeg2d-BAxXTmmoFHflSD9oQ9Rd6BAhGEAU",
        calender: calenderLevel,
        name: "level up games",
        subText: "gaming with the good guys",
    },

    {
        icon: turn1GamingLogo,
        location: " 1175 Oak Ridge Turnpike, Oak Ridge, TN 37830 ",
        locationHerf:
            "https://www.google.com/maps/dir/35.8678528,-84.0695808/turn+one+gaming/@35.9402316,-84.321233,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x885c332498c9ea59:0x80f3dfc0863e8786!2m2!1d-84.2472709!2d36.0177719?entry=ttu",
        calender: calenderTurn1,
        name: "turn one gaming",
        subText: "gaming with the good guys",
    },
];
