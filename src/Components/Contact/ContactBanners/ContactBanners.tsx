import face from "../../../Assets/Images/Banners/1683456634_facebookfrommeta-banner.png_story.jpg";
import tick from "../../../Assets/Images/Banners/TikTok_Banner-1.jpg";
import discord from "../../../Assets/Images/Banners/discord-icon-png-0.jpg";
import insta from "../../../Assets/Images/Banners/follow_us_on_instagram_png_520998.png";
import "./ContactBannersS.scss";

export const ContactBanners = () => {
    return (
        <div className="ContactBanners">
            <div className="banner-container">
                <img src={face} className="banner" alt="facebook" />
            </div>
            <div className="banner-container">
                <img src={discord} className="banner" alt="discord" />
            </div>
            <div className="banner-container">
                <img src={insta} className="banner" alt="instagram" />
            </div>

            <div className="banner-container">
                <img src={tick} className="banner tik" alt="tiktok" />
            </div>
        </div>
    );
};
