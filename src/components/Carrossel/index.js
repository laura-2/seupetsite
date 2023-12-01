import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import { historias } from "../../../data";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carrossel(){
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
                {historias.map(card => (
                    <SwiperSlide key={card.id} className="lista-carrossel">
                    <div className="px-16 pb-20">
                        <Image src={card.imagem} alt={card.titulo}/>
                        <h1 className="titulo-carrossel">{card.titulo}</h1>
                        <p className="text-sm">{card.descricao}</p>
                    </div>
                    
                </SwiperSlide>
                ))}
        </Swiper>
    )
}