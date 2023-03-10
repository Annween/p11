import Header from "./components/Header";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Home from "./pages/home/Home";
import Rental from "./components/Rental";
import About from "./pages/about/About";
import Error from "./pages/error/error";
import React from "react";
import SingleRental from "./pages/SingleRental/rental";
//const id = useParams();


function Router() {
	return <BrowserRouter>
		<Header/>
		<Routes>
			<Route  path="/" element={<Home/>}/>
			<Route path="/rental/:id" element={<SingleRental/>} />
			<Route path="/about" element={<About/>}/>
			<Route path="*" element={<Error />}/>
		</Routes>
	</BrowserRouter>
}

export default Router;
