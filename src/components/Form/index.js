'use client'
import { useState } from "react"
import Image from "next/image";

export default function Form(){
    const [image, setImage] = useState([])
    const [post, setPost] = useState({
        nome: '',
        imagem: [],
        categoria: '',      
        topico: '',
        descricao: ''
    })
    const handleInput = (e) => {
        if (e.target.type === 'file') {
            handleInputFile(e);
        } else {
            setPost({ ...post, [e.target.name]: e.target.value });
        }
    }
    async function handleInputFile(e){
        const files = e.target.files

        const newFiles = [...files].filter(file =>{
            if(file.size < 1024*1024 && file.type.startsWith('image/')){
                return file
            }
        })
        console.log(newFiles, files)
        setImage(prev => [...newFiles, ...prev])
        setPost((prevPost) => ({ ...prevPost, imagem: [...newFiles, ...prevPost.imagem] }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch('/api/cardPost/route', {
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
            <form className="text-black w-full" onSubmit={handleSubmit}>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="nome">Nome:</label>
                    <input onChange={handleInput} className="input-form p-3" type="text" name="nome"
                    value={post.nome}/>
                </span>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="imagem">Imagem/Vídeo:</label>
                    <input onChange={handleInput} type="file"  accept='image/*' multiple />
                </span>
                {image.map((file, index)=>(
                <Image key={index} alt='image' src={URL.createObjectURL(file)} width={100} height={60} priority/>
            ))}
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="categoria">Categoria:</label>
                    <select onChange={handleInput} className="p-3 input-form" type="select" name="categoria" placeholder="Selecione a categoria"
                     value={post.categoria}>
                    {optionCategoria.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                    </select>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="topico">Tópico:</label>
                    <input onChange={handleInput} className="input-form p-3" type="text" name="topico"  value={post.topico}/>
                </span>
                </span>
                <span className="flex flex-col gap-5 my-2">
                    <label htmlFor="descricao">Dicas/Atualizações/Histórias/Indicações:</label>
                    <input onChange={handleInput} className="input-form px-3 py-5" type="text" name="descricao" value={post.descricao}/>
                </span>
                <button className="botao-experiencia" type="submit">Compartilhar</button>
            </form>
        </div>
    )
}