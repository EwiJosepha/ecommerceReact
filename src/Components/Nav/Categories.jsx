 import { useQuery } from "@tanstack/react-query"
 import axios from "axios"


function Categories () {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/categories`
      );

      return res.data
    },
  });

  console.log(data);
  return (
    <>
    {data?.map((categories, index)=>(
      <option id="category" key={index}>{categories}</option>
    ))}

    </>
  )
}

export default Categories