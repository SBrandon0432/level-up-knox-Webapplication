import { useContext } from "react";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import { StoreCard } from "./StoreCard/StoreCard";
import "./StoreCardsS.scss";

export const StoreCards = () => {
    const { storeCards } = useContext(MyLevelUpContext);

    return (
        <div className="StoreCards">
            {storeCards.map((card, index) => {
                return <StoreCard card={card} key={index} />;
            })}
        </div>
    );
};
