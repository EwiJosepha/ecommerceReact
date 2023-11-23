import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Pagination() {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(10);

  const { data } = useQuery({
    queryKey: ["pagination"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=0&skip=0`
      );


      return res.data.products
    }

  });

  useEffect(()=>{

    setPosts(data);
    console.log(posts);


  },[])

  console.log(posts);
  return <>

  </>;
}
export default Pagination;
