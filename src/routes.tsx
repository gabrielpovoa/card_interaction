import { Routes, Route } from "react-router-dom"
import App from "./App"
import { Modal } from "./components/modal"

export const RouterList = () => {
    return(
        <Routes>
            <Route path="/model" element={<Modal Open={false} />} />
        </Routes>
    )
}