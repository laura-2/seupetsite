import Image from "next/image";
import foto1 from '@/assets/1.png'
import foto2 from '@/assets/2.png'
import foto3 from '@/assets/3.png'
import foto4 from '@/assets/4.png'

export default function Introduce(){
    return(
        <div className="h-screen w-full">
            <h1 className="absolute inset-y-1/2 inset-x-1/4 text-center text-2xl">SEU PET SITE é uma rede social para exclusivamente seu animalzinho de estimação,
            aqui você pode compartilhar suas fotos, vídeos e também ajudar seu amigo, compartilhar cuidados, tratamentos, produtos que seu
            animalzinho usa. </h1>
            <Image src={foto1} alt="" className="absolute w-1/6 left-0 top-1/2"/>
            <Image src={foto3} alt="" className="absolute w-1/6 left-80"/>
            <Image src={foto4} alt="" className="absolute w-1/6 right-0 top-1/2"/>
            <Image src={foto2} alt="" className="absolute w-1/6 right-20"/>
        </div>
    )
}