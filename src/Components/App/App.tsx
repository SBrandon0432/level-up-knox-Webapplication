import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../Types/types";
import { MyLevelUpContextProvider } from "../Context/MyLevelUpContext";
import { FooterNav } from "../FooterNav/FooterNav";
import { Home } from "../Home/Home";

import { useEffect } from "react";
import { Calender } from "../Calander/Calander";
import { MeetTeam } from "../MeetTeam/MeetTeam";
import { NavBar } from "../NavBar/NavBar";
import "./AppS.scss";

export const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === Paths.DEFAULT) navigate(Paths.HOME);
    }, [location, navigate]);

    return (
        <div className="App">
            <MyLevelUpContextProvider>
                <NavBar />
                <Routes>
                    <Route path={Paths.HOME} element={<Home />} />
                    <Route path={Paths.MEETTEAM} element={<MeetTeam />} />
                    <Route path={Paths.CALENDER} element={<Calender />} />
                </Routes>
                <FooterNav />
            </MyLevelUpContextProvider>
        </div>
    );
};
