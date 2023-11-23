import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./meal.css";
import { useEffect } from "react";
import Paginatte from "./Paginatte";
import { useState } from "react";

function Mealcard() {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(10);
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

  useEffect(()=>{
    setPosts(data)
    console.log(posts);

  },[])



console.log(posts);
const indexoflastpost = currentpage * postperpage
const indexoffirstposst = indexoflastpost - postperpage
const currentpost = posts.slice(indexoffirstposst, indexoflastpost)

// function to update the page
const paginate = (pagenumber)=> {
  setCurrentpage(pagenumber)
}
  
  return (
    <>
      <div className="containerthumb">
        {currentpost?.map((item) => {
          return (
            <div className="top">
              <div className="subcard" id="subcards">
                <Link to={ `./Details id=${item.id}`} >
                <img src={item.thumbnail} id="details-page" />
                </Link>

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
        <Paginatte postperpage={postperpage} totalposts={posts.length} paginate={paginate}/>
      </div>
    </>
  );
}

export default Mealcard;
