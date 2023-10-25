import face from "../../../Assets/Images/Banners/1683456634_facebookfrommeta-banner.png_story.jpg";
import tick from "../../../Assets/Images/Banners/TikTok_Banner-1.jpg";
import discord from "../../../Assets/Images/Banners/discord-icon-png-0.jpg";
import insta from "../../../Assets/Images/Banners/follow_us_on_instagram_png_520998.png";
import "./ContactBannersS.scss";

export const ContactBanners = () => {
    return (
        <div className="ContactBanners">
            <div className="banner-container">
                <a href="https://www.facebook.com/levelupknox/">
                    <img src={face} className="banner face" alt="facebook" />
                </a>
            </div>
            <div className="banner-container">
                <a href="https://discord.gg/yDyawXka3s">
                    <img src={discord} className="banner" alt="discord" />
                </a>
            </div>
            <div className="banner-container">
                <a href="https://www.instagram.com/levelupknox/">
                    <img src={insta} className="banner" alt="instagram" />
                </a>
            </div>

            <div className="banner-container">
                <a href="https://www.tiktok.com/@cardshoptalk">
                    <img src={tick} className="banner tik" alt="tiktok" />
                </a>
            </div>
        </div>
    );
};
