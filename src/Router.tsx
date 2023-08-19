import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import {ADDCATEGORY, ADDPRODUCT, HOME, NOTFOUND, SIGNIN, SIGNUP} from "./Util/Path";
import Error from "./Pages/Error";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Addproduct from "./Pages/Addproduct";
import Addcategory from './Pages/Addcategory';
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path={HOME} element={<Home/>}/>
                      <Route path={SIGNIN} element={<Signin/>}/>
                      <Route path={SIGNUP} element={<Signup/>}/>
                      <Route path={ADDPRODUCT} element={<Addproduct/>}/>
                      <Route path={ADDCATEGORY} element={<Addcategory/>}/>
                      <Route path={NOTFOUND} element={<Error/>}/>
                  </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Router;