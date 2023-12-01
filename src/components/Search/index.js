import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

export default async function Search(){
  // const [post, setPost] = useState({})

  //   const response = await fetch('/api/posts/getPosts', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(post),
  //   });

  //   const data = await response.json();
  //   setPost(data)
    return(
        <section className="block py-5">
            {/* <input className="border-solid border-white border-2 rounded-3xl bg-white text-base text-black mt-5 text-center
            py-2 w-1/4 placeholder:text-black text-center bg-auto bg-no-repeat bg-right"
            placeholder="Qual seu destino?" 
            onBlur={event => {
                const textWriting = event.target.value;
                const results = Array.isArray(post)
                  ? post.filter(post => post.topico.includes(textWriting))
                  : [];
                setInputValue(results);
                if (textWriting === '') {
                  setInputValue([]);
                }
              }}/> */}
            <button className="ml-3 pt-6 bg-blue-950 border-none absolute"></button>
            <div className="">
            {/* {data.map((post, index) => {
                    return <p className="text-white" key={index}>{post}</p>
                })} */}
                </div>
        </section>
    )
} 