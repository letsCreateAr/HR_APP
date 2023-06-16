import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Tasks from '../pages/Tasks';


const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
    </Routes>
};

export default AppRoutes;