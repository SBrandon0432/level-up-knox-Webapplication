import { Navigate, Route, Routes } from "react-router-dom";
import { Paths } from "../../Types/types";
import { MyLevelUpContextProvider } from "../Context/MyLevelUpContext";
import { FooterNav } from "../FooterNav/FooterNav";
import { Home } from "../Home/Home";

import { NavBar } from "../NavBar/NavBar";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MyLevelUpContextProvider>
                <NavBar />
                <Routes>
                    <Route
                        path={Paths.DEFAULT}
                        element={<Navigate to={Paths.HOME} />}
                    />
                    <Route path={Paths.HOME} element={<Home />} />
                </Routes>
                <FooterNav />
            </MyLevelUpContextProvider>
        </div>
    );
};
