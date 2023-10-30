import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Main from '../pages/Main/Main';
import Home from '../pages/Home/Home';


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}