import { useLoaderData } from "react-router-dom"
import { PostCard } from "../components/PostCard"

export function Posts() {
  const posts = useLoaderData()

  return (
    <div className="card-grid">
      {posts.map((post) => {
        return <PostCard key={post.id} {...post} />
      })}
    </div>
  )
}
