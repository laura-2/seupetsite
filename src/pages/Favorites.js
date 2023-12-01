// import { useContext, useEffect } from "react";
// import { FavoritosContext } from "@/context/favoritos";
// import Card from "@/components/Card";
// function Favoritos() {
//   const {favorites, setFavorites} = useContext(FavoritosContext)
 
//     async function fetchFavoritos(){
//     const favoritosAPI = await getFavoritos()
//     setFavorites(favoritosAPI)
//     }

//     useEffect(()=>{
//       fetchFavoritos()
//     })


//   return (
//   <div className="bg-blue-950 py-5">
//     {favorites.length > 0 ? favorites.map((fav, index) => {
//             return <Card {...fav} key={index} />
//         }) : <p className="text-white text-center text-xl">Você não adicionou nenhuma viagem aos favoritos!</p>
//          }
//     </div>
//   );
// }

// export default Favoritos;