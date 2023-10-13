import { isOpen } from "../../Types/types";

export const storeOpenStatus = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMin = currentTime.getMinutes() / 100;

    const compiledTime = currentHour + currentMin;
    if (compiledTime >= 20 && compiledTime < 21)
        return [isOpen.CLOSINGSOON, "Closing Soon"];
    if (compiledTime >= 12 && compiledTime <= 21) return [isOpen.OPEN, "Open"];
    else return [isOpen.CLOSED, "closed"];
};
