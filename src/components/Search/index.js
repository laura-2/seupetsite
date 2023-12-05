import getPosts from "../../../getPosts"

export default async function Search(){
    const data = await getPosts()
    return (
        <div>
            {data && data?.map((post)=>{
              return <div key={post?._id}>
                <h1 className="text-white">{post?.nome}</h1>
                </div>
            })}
        </div>
    )
}
