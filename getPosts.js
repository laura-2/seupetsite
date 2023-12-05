import { notFound } from "next/navigation"

export default async function getPosts(){
    const res = await fetch("http://localhost:3000/api/posts", {cache:"no-store"})
    if(!res.ok) return notFound();
    return res.json()
}
