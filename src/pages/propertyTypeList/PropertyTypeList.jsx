import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import "./propertyTypeList.css";
import { useState, useEffect } from "react";

const PropertyTypeList = (props) => {
  const [propertyType, setPropertyType] = useState("");

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels");

  useEffect(() => {
    setPropertyType(props.type);
  }, [props]);

  return (
    <div className="propertyTypeList">
      <Navbar />
      <Header type="list" />
      <div className="propertyTypeList_main">
        {data.map((item) => {
          if (item.type === propertyType) {
            return <SearchItem item={item} key={item._id} />;
          }
        })}
      </div>
    </div>
  );
};

export default PropertyTypeList;
