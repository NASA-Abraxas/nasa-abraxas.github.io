import { Route, Routes, useLocation } from "react-router-dom"
import Ch2MainPage from "./Ch2MainPage";
import Aerosol from "./Aerosol";
import Atmo from "./Atmo";
import Ocean from "./Ocean";
import Plank from "./Plank";

export const Chapter2RoutesTest = ({path}:{path?:string}) => {
    const location = useLocation();
    console.log(path);
    return (<Routes location={location}>
        <Route path="/" element={<Ch2MainPage/>}/>
        <Route path="/aerosol" element={<Aerosol/>}/>
        <Route path="/atmo" element={<Atmo/>}/>
        <Route path="/plank" element={<Plank/>}/>
        <Route path="/ocean" element={<Ocean/>}/>
    </Routes>)
}