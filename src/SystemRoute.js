import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomTemplePage from "./Pages/CustomTemplePage"
import MainPage from "./Pages/MainPage"

const SystemRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/customtemples" element={<CustomTemplePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default SystemRoute