import Filtertypes from "../FilterbyTypes/Filtertypes"
import Grab from "../Grapbuy/Grab"
import Mealcard from "../Mealcards/Mealcard"

function Home () {
    return(
      <>
      <Grab />
      <Filtertypes />
      <Mealcard />

      </>
    )
}
 export default Home