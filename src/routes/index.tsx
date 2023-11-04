import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Main from '../pages/Main/Main';
import Home from '../pages/Home/Home';
import Insert from '../pages/Insert/Insert';
import SeacrhCNP from '../pages/searchCNPJ/search';


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/insert" element={<Insert/>}/>
                <Route path="/insert/:id" element={<Insert/>}/>
                <Route path="/cnpj" element={<SeacrhCNP/>}/>
            </Routes>
        </BrowserRouter>
    );
}