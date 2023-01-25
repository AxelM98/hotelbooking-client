import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import "./propertyCityList.css";
import { useState, useEffect } from "react";

const PropertyCityList = (props) => {
  const [propertyCity, setPropertyCity] = useState("");

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels");
  console.log(props.city);

  useEffect(() => {
    setPropertyCity(props.city);
  }, [props]);

  return (
    <div className="propertyCityList">
      <Navbar />
      <Header type="list" />
        <div className="propertyCityList_main">
          {data.map((item) => {
            if (item.city === propertyCity) {
              return <SearchItem item={item} key={item._id} />;
            }
          })}
        </div>
      </div>
  );
};

export default PropertyCityList;
