import { Routes, Route } from 'react-router-dom';
import Home from '../Component/Home';
import Login from '../Component/Login';
import Signup from '../Component/Signup';
import Product from '../Component/Product';
import PrivateRoute from '../Component/PrivateRoute';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={
               <PrivateRoute> 
                <Product />
               </PrivateRoute> 
                } />
        </Routes>
    );
};

export default MainRoutes;