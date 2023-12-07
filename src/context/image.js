import { createContext, useState } from "react";

export const ImagesContext = createContext();
ImagesContext.displayName = "Images";

export const ImageProvider =({ children }) =>{
    const [image, setImage] = useState([])
    const [post, setPost] = useState({
        nome: '',
        categoria: '',
        topico: '',
        descricao: ''
    })
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
    return (
        <ImagesContext.Provider
            value={{ image, handleInputFile, handleSubmit, handleInput }}>
            {children}
        </ImagesContext.Provider>
    )
}
