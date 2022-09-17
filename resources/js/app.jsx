import './bootstrap';

import { createRoot } from 'react-dom/client';
import CompaniesIndex from "./Pages/Companies/Index";

const root = createRoot(document.getElementById('app'));
root.render(<CompaniesIndex />);
