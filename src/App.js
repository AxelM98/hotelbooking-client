import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import PropertyCityList from "./pages/propertyCityList/PropertyCityList";
import PropertyTypeList from "./pages/propertyTypeList/PropertyTypeList";

function App() {
  const [type, setType] = useState("")
  const [city, setCity] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setType={setType} setCity={setCity}/>} />
        <Route path="/hotels" element={<List />} />
        <Route path="/listcity" element={<PropertyCityList city={city}/>} />
        <Route path="/list" element={<PropertyTypeList type={type}/>} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
