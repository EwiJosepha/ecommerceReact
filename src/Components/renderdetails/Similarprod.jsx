import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Simalarprod () {
  const params = useParams();


  const { data } = useQuery({
    queryKey: ["similarities"],
    queryFn: async () => {
      const meall = await axios.get(
        `https://dummyjson.com/products/${params}`
      ).then((response)=>response.data)
      const mealCategory = await axios.get(`https://dummyjson.com/products?limit=10&skip=10=${meall.products[0].category}`)
      return {
        meall, mealCategory: mealCategory.data
      }
    },
  });

  console.log(data);
  return(
    <>
    </>
  )
}
export default Simalarprod