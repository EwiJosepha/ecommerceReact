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
  return (
    <>
    {data?.map((categories)=>(
      <option id="category">{categories}</option>
    ))}

    </>
  )
}

export default Categories