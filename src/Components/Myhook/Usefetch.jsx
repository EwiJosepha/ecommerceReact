import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function Usefetch () {
  const params = useParams();
  const { data} = useQuery({
    queryKey: ["singlemeal"],
    queryFn: async () => {
      const id= params.id
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      console.log(res);


      return res.data
    },
  });

  return {data}
  
}

export default Usefetch