import { useContext } from "react";
import { FavoritosContext } from "@/context/favoritos";
import Image from "next/image";
import Icon from '@mdi/react';
import { mdiHeartOutline } from '@mdi/js';
import { mdiHeart } from '@mdi/js';

export default function Card({ nome, imagem, categoria, topico, descricao}){
    const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritosContext)
    
    const favoritesChecker = (id)=>{
        const boolean = favorites.some((viagem)=> viagem.id === id)
        return boolean
    }
    
    return(
            <div className="bg-white rounded-xl my-5 w-1/2 shadow-2xl m-auto">
                {!favoritesChecker(id) ? (
                <Icon path={mdiHeartOutline} size={1} onClick={() => addToFavorites(nome, imagem, categoria, topico, descricao)}/>
            ) : (
                <Icon path={mdiHeart} size={1} onClick={() => removeFromFavorites(nome, imagem, categoria, topico, descricao)}/>
            )}
            <Image src={imagem} alt="imagem"/>
                <div className="flex gap-3 justify-center">
                <h3 className="text-center text-amber-500 font-bold m-1 text-xl p-3">{nome}</h3>
                    <p className="py-1">Tópico: <strong className="text-center text-blue-950 text-xl
                    font-bold">{topico}</strong> </p>
                </div>
            <div>
            <div className="flex gap-2 justify-center">
            <p className="py-1 px-4">Comentário: <strong className="text-base text-blue-950">{descricao}</strong></p>
                    </div>
                    </div>
        </div>
    )
} 