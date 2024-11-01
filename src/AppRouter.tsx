import { HashRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./styles/global";
import { Home } from "./pages/Home/Home";
globalStyles();
export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    )
};