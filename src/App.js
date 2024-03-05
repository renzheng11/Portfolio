import React from "react";
import "./App.css";
import { Noise } from "./articles/Noise";
import { Kaleido } from "./articles/Kaleido";
import { Calico } from "./articles/Calico";
import { Memory } from "./articles/Memory";
import { QM } from "./articles/QM";
import { Access } from "./articles/Access";
import { Home } from "./Home";
import { About } from "./About";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/kaleido" element={<Kaleido />} />
			<Route path="/qm" element={<QM />} />
			<Route path="/accessh20" element={<Access />} />
			<Route path="/noise" element={<Noise />} />
			<Route path="/memories" element={<Memory />} />
			<Route path="/calico" element={<Calico />} />
		</Routes>
	);
}

export default App;
