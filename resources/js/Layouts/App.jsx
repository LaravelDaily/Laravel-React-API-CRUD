import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CompaniesIndex from "../Pages/Companies/Index";
import CompaniesCreate from "../Pages/Companies/Create";
import CompaniesEdit from "../Pages/Companies/Edit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={ <CompaniesIndex /> }></Route>
                <Route path="/companies/create" element={ <CompaniesCreate /> }></Route>
                <Route path="/companies/edit/:id" element={ <CompaniesEdit /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
