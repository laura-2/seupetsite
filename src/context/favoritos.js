// import { createContext, useState } from "react";
// import { deleteFavorito, postFavorito } from "../servicos/favoritos";

// export const FavoritosContext = createContext();
// FavoritosContext.displayName = "Favoritos";

// export const FavoritosProvider =({ children }) =>{
//     const [favorites, setFavorites] = useState([]);

//     const addToFavorites =(post)=> {
//       const oldFavorites = [...favorites]
//       const newFavorites = oldFavorites.concat(post)
//       if (!favorites.includes(post)) {
//         setFavorites([...newFavorites, post]);
//         postFavorito(post)
//       }
//       alert("Você adicionou esta post a sua lista de favoritos!")
//       };
    
//     const removeFromFavorites =(id)=> {
//       const oldFavorites = [...favorites]
//       const newFavorites = oldFavorites.filter((post)=> post.id !== id)
//       setFavorites(newFavorites)
//       deleteFavorito(id)  
//     };
//     return (
//         <FavoritosContext.Provider
//             value={{ favorites,setFavorites, addToFavorites, removeFromFavorites }}>
//             {children}
//         </FavoritosContext.Provider>
//     )
// }
