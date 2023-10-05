import knoxSquareLogo from "../../Assets/Images/levelup-square-logo.pdf-01.png";
import { StoreCard } from "./types";
// export interface StoreCard {
//   icon: string;
//   location: string;
//   locationHerf: string;
//   calender: string[];
// }

export const StoreCards: StoreCard[] = [
    {
        icon: knoxSquareLogo,
        location: " 9315 Kingston Pike, Knoxville, TN 37922 ",
        locationHerf:
            "https://www.google.com/maps/dir//level+up+knoxville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x885c257ad21e4bf5:0xdcfaf515d999cfb5?sa=X&ved=2ahUKEwjglIeg2d-BAxXTmmoFHflSD9oQ9Rd6BAhAEAA&ved=2ahUKEwjglIeg2d-BAxXTmmoFHflSD9oQ9Rd6BAhGEAU",
        calender: [],
    },

    {
        icon: knoxSquareLogo,
        location: " 1175 Oak Ridge Turnpike, Oak Ridge, TN 37830 ",
        locationHerf:
            "https://www.google.com/maps/dir/35.8678528,-84.0695808/turn+one+gaming/@35.9402316,-84.321233,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x885c332498c9ea59:0x80f3dfc0863e8786!2m2!1d-84.2472709!2d36.0177719?entry=ttu",
        calender: [],
    },
];
