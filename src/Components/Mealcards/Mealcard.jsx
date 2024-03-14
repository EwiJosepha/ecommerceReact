import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import './meal.css'

import axios from "axios";
import { useEffect } from "react";
import Paginatte from "./Paginatte";
import { useState } from "react";

function Mealcard() {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(10);
  // const [imageid, setImageid]= useState()

  // useEffect(() => {
  // }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["mealcard"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=10`
      );

      return res.data.products;
    },
  });

  if (error) {
    return <h1>An error Occured</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  console.log(data);

  const indexoflastpost = currentpage * postperpage;
  const indexoffirstposst = indexoflastpost - postperpage;

  const currentpost = data.slice(indexoffirstposst, indexoflastpost);

  const paginate = (pagenumber) => {
    setCurrentpage(pagenumber);
  };

  console.log(data);

  function addtolocalstorage (e) {
    const imageid =e.target.dataset.imageid

    const itemToAdd = data.find((pro) => +pro.id === +imageid)
    const addedProduts = JSON.parse(localStorage.getItem("addedcards")) || [];

    addedProduts.push(itemToAdd)

    console.log(itemToAdd);

    localStorage.setItem("addedcards", JSON.stringify(addedProduts));
    alert("add to card");

}

  return (
    <>
      <div className="containerthumb">
        {currentpost?.map((item) => {
          return (
            <div className="topp">
              <div className="subcard" id="subcardds">
                <Link to={`./Details/${item.id}`}>
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
                <button id="addtocard" className="addtocard" data-imageid={item.id} onClick={
                addtolocalstorage}>
                  Add to Card
                </button>
                <button id="shortlist">Short List</button>
              </div>
            </div>
          );
        })}
       
      </div>
      <div className="previews">
         <Paginatte
          postperpage={postperpage}
          totalposts={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Mealcard;
