import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./StoreImagesS.scss";

export const StoreImages = () => {
    const { storeImages } = useContext(MyLevelUpContext);

    return (
        <div className="StoreImages">
            <Carousel
                autoPlay
                dynamicHeight
                showThumbs={false}
                stopOnHover={true}
                infiniteLoop={true}
            >
                {storeImages.map((url, index) => (
                    <img key={index} src={url.image} alt={url.alt} />
                ))}
            </Carousel>
        </div>
    );
};
