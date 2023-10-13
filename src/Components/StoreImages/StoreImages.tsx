import { useContext } from "react";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";

export const StoreImages = () => {
    const { storeImages } = useContext(MyLevelUpContext);

    console.log(storeImages);
    return <></>;
};
