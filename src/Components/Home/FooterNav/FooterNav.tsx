import Navbar from "react-bootstrap/Navbar";
import discord from "../../Assets/Svgs/socials-svgs/discord-communication-interaction-message-network-svgrepo-com.svg";
import facebook from "../../Assets/Svgs/socials-svgs/facebook-color-svgrepo-com.svg";
import instaGram from "../../Assets/Svgs/socials-svgs/instagram-1-svgrepo-com.svg";
import tickTock from "../../Assets/Svgs/socials-svgs/tiktok-icon-black-1-logo-svgrepo-com.svg";
import "./FooterNavS.scss";

export const FooterNav = () => {
    return (
        <Navbar className="FooterNav" fixed="bottom">
            <div className="socials">
                <a href="https://discord.gg/yDyawXka3s">
                    <img src={discord} className="svg" alt="icon" />
                </a>
                <a href="https://www.tiktok.com/@cardshoptalk">
                    <img src={tickTock} className="svg" alt="icon" />
                </a>

                <a href="https://www.facebook.com/levelupknox/">
                    <img src={facebook} className="svg" alt="icon" />
                </a>
                <a href="https://www.instagram.com/levelupknox/">
                    <img src={instaGram} className="svg" alt="icon" />
                </a>
            </div>
        </Navbar>
    );
};
