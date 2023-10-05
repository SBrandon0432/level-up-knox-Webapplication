import { Navigate, Route, Routes } from "react-router-dom";
import { Paths } from "../../Types/types";
import { Home } from "../Home/Home";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path={Paths.DEFAULT}
                    element={<Navigate to={Paths.HOME} />}
                />
                <Route path={Paths.HOME} element={<Home />} />
            </Routes>
        </div>
    );
};
