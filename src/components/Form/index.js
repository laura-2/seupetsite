'use client'
import { useState, useRef } from "react"
import Carrossel from "../Carrossel";
import Image from "next/image";

export default function Form(){
    const formRef = useRef()
    const [post, setPost] = useState({
        nome: '',
        categoria: '',
        topico: '',
        descricao: ''
    })
    const [image, setImage] = useState([])
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    async function handleInputFile(e){
        const files = e.target.files

        const newFiles = [...files].filter(file =>{
            if(file.size < 1024*1024 && file.type.startsWith('image/')){
                return file
            }
        })
        console.log({files, newFiles})
        setImage(prev => [...newFiles, ...prev])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch('/api/route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        });
    
        const data = await response.json();
    
        if (data.success) {
          console.log('Dados enviados com sucesso!');
        }
      };
    
    const optionCategoria = ['Gatos', 'Cachorros', 'Peixes', 'Pássaros', 'Outros']
    return(
        <div className="flex gap-20 mx-28 my-5">
            <div className="text-black text-start w-2/3">
                <h1 className="my-5">Compartilhe sua história!</h1>
                <p>Conte as pessoas sua experiência com seu animalzinho,
                    as melhores dicas, algo que tenha a nos indicar.
                </p>
            </div>
            <form className="text-black w-full" onSubmit={handleSubmit} ref={formRef}>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="nome">Nome:</label>
                    <input onChange={handleInput} className="input-form p-3" type="text" name="nome"/>
                </span>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="imagem">Imagem/Vídeo:</label>
                    <input onChange={handleInputFile} type="file" name="imagem" accept='image/*' multiple/>
                </span>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="categoria">Categoria:</label>
                    <select onChange={handleInput} className="p-3 input-form" type="select" name="categoria" placeholder="Selecione a categoria"
                    >
                    {optionCategoria.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="topico">Tópico:</label>
                    <input onChange={handleInput} className="input-form p-3" type="text" name="topico" />
                </span>
                </span>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="descricao">Dicas/Atualizações/Histórias/Indicações:</label>
                    <input onChange={handleInput} className="input-form px-3 py-5" type="text" name="descricao"/>
                </span>
                <button className="botao-experiencia" type="submit">Compartilhar</button>
            </form>
            {image.map((file, index)=>(
                <Image key={index} alt='image' src={URL.createObjectURL(file)} width={100} height={60} priority/>
            ))}
        </div>
    )
}