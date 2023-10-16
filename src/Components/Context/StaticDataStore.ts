import storeDoor from "../../Assets/Images/Lel-Door.jpg";
import storeFront from "../../Assets/Images/Lvl-Front.jpg";
import storeGameArea from "../../Assets/Images/Lvl-GameArea.jpg";
import storeInside from "../../Assets/Images/Lvl-StoreInside.jpg";
import turn1GamingLogo from "../../Assets/Images/Turn1.jpeg";
import knoxSquareLogo from "../../Assets/Images/levelup-square-logo.pdf-01.png";
import { Calender, StoreCardProps, StoreImagesProps } from "./types";

export const calenderLevel: Calender[] = [
    {
        day: "monday",
        events: [
            {
                title: "MTG Modern",
                startTime: "7:00 p.m.",
                description: "$5 entry",
            },
        ],
    },
    {
        day: "tuesday",
        events: [
            {
                title: "D&D",
                startTime: "5:00 p.m.",
            },
            {
                title: "MTG Commander",
                startTime: "5:00 p.m.",
            },
        ],
    },
    {
        day: "wednesday",
        events: [
            {
                title: "MTG Draft",
                startTime: "7:00 p.m.",
                description: "$14 entry",
            },
        ],
    },
    {
        day: "thursday",
        events: [
            {
                title: "Pokemon Standard",
                startTime: "6:30 p.m.",
                description: "$5 entry",
            },
        ],
    },
    {
        day: "friday",
        events: [
            {
                title: "MTG FNM",
                startTime: "7:00 p.m.",
            },
            {
                title: "MTG Commander",
                startTime: "7:00 p.m.",
            },
            {
                title: "MTG Draft",
                startTime: "7:00 p.m.",
                description: "$14 entry",
            },
        ],
    },
    {
        day: "saturday",
        events: [
            {
                title: "Cardfight",
                startTime: "6:00 p.m.",
            },
            {
                title: "VGC Tournaments",
                startTime: "TBA",
            },
        ],
    },
    {
        day: "sunday",
        events: [
            {
                title: "D&D",
                startTime: "1:00 p.m.",
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
        hours: [
            {
                day: "Monday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Tuesday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Wednesday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Thursday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Friday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Saturday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Sunday",
                open: "1:00 PM",
                closed: "7:00 PM",
            },
        ],
        phone: "(865) 332-0041",
    },

    {
        icon: turn1GamingLogo,
        location: " 1175 Oak Ridge Turnpike, Oak Ridge, TN 37830 ",
        locationHerf:
            "https://www.google.com/maps/dir/35.8678528,-84.0695808/turn+one+gaming/@35.9402316,-84.321233,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x885c332498c9ea59:0x80f3dfc0863e8786!2m2!1d-84.2472709!2d36.0177719?entry=ttu",
        calender: calenderTurn1,
        name: "turn one gaming",
        subText: "gaming with the good guys",
        hours: [
            {
                day: "Monday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Tuesday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Wednesday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Thursday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Friday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Saturday",
                open: "12:00 PM",
                closed: "9:00 PM",
            },
            {
                day: "Sunday",
                open: "12:00 PM",
                closed: "6:00 PM",
            },
        ],
        phone: "(865) 298-5236",
    },
];

export const StoreImages: StoreImagesProps[] = [
    {
        image: storeFront,
        alt: "store front",
    },
    {
        image: storeDoor,
        alt: "store door",
    },
    {
        image: storeInside,
        alt: "store inside",
    },
    {
        image: storeGameArea,
        alt: "store front",
    },
];

export const testimages = [storeFront, storeDoor, storeGameArea, storeInside];
