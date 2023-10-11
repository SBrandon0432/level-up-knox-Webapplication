import { useContext } from "react";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import { StoreCard } from "../StoreCard/StoreCard";
import "./HomeS.scss";

export const Home = () => {
    const { storeCards } = useContext(MyLevelUpContext);

    return (
        <div className="Home">
            <div className="storeCards-container">
                {storeCards.map((card, index) => {
                    return <StoreCard card={card} key={index} />;
                })}
            </div>
        </div>
    );
};
