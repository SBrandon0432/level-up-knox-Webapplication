import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { MyLevelUpContext } from "../Context/MyLevelUpContext";
import "./StoreImagesS.scss";

export function StoreImages() {
    const { storeImages } = useContext(MyLevelUpContext);
    console.log(storeImages);

    return (
        <div className="StoreImages">
            <Carousel autoPlay>
                {storeImages.map((url, index) => (
                    <img key={index} src={url.image} />
                ))}
            </Carousel>
        </div>
    );
}
