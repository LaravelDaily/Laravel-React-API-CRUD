import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CompaniesIndex from "../Pages/Companies/Index";
import CompaniesCreate from "../Pages/Companies/Create";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={ <CompaniesIndex /> }></Route>
                <Route path="/companies/create" element={ <CompaniesCreate /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
