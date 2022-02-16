import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomTemplePage from "./Pages/CustomTemplePage"
import MainPage from "./Pages/MainPage"
import NotFound from "./Pages/NotFound"

const SystemRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/customtemples" element={<CustomTemplePage />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default SystemRoute