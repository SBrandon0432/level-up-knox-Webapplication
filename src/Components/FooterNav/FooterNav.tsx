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
                <img src={discord} className="svg" />
                <img src={tickTock} className="svg" />
                <img src={facebook} className="svg" />
                <img src={instaGram} className="svg" />
            </div>
        </Navbar>
    );
};
