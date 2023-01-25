import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = ({setCity}) => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=rome,berlin,wien"
  );

  const navigate = useNavigate();

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem" onClick={() => setCity("rome", navigate("/listcity"))}>
            <img
              src="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rome</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem" onClick={() => setCity("berlin", navigate("/listcity"))}>
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/76/09/85/1000_F_176098557_cqnDbgx5u8vdx8Prs3gD146O7fHB5YcX.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem" onClick={() => setCity("wien", navigate("/listcity"))}>
            <img
              src="https://www.mensjournal.com/wp-content/uploads/2018/07/Viennamain.jpg?quality=47&strip=all"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Vienna</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
