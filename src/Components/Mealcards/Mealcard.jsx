import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./meal.css";

function Mealcard() {
  // const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["mealcard"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=0&skip=0`
      );

      return res.data.products;
    },
  });

  console.log(data);
  return (
    <>
      <div className="containerthumb">
        {data?.map((item) => {
          return (
            <div className="top">
              <div className="subcard" id="subcards">
                {/* <Link to="/Details"> */}
                <img src={item.thumbnail} id="details-page" />
                {/* </Link> */}

                <i className="fa-regular fa-heart"></i>
              </div>

              <div className="snikersprice">
                <span id="snykers">{item.title}</span>
                <span id="snykers-price">{item.price}</span>
              </div>

              <div className="shoes-available">
                <p id="shoes"> 5 types of shoes available</p>
              </div>
              <div className="stars">
                <span id="star" className="fa-star">
                  {item.rating}
                </span>
                <p id="number">(121)</p>
              </div>
              <div className="date">
                <button id="addtocard" className="addtocard">
                  Add to Card
                </button>
                <button id="shortlist">Short List</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mealcard;
