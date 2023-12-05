import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import getPosts from "../../../getPosts";

export default async function Carrossel(){
    const data = await getPosts()
    return (
        <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
            clickable: true,
          }}
        modules={[EffectCoverflow, Pagination]}
        className="my-36"
        >
                {data.map(card => (
                    <SwiperSlide key={card._id} className="lista-carrossel">
                    <div className="px-16 pb-20">
                        <img src={card?.imagem} alt={card?.nome} width={20}/>
                        <h1 className="titulo-carrossel">{card.topico}</h1>
                        <p className="text-sm">{card.descricao}</p>
                    </div>
                    
                </SwiperSlide>
                ))}
        </Swiper>
    )
}