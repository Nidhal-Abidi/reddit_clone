import { Link, useLoaderData } from "react-router-dom"

export function Post() {
  const post = useLoaderData()
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${post.userId}`}>UserName</Link>
      </span>
      <div> {post.body} </div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">email@email.com</div>
            comment body - 1
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">email@email.com</div>
            comment body - 2
          </div>
        </div>
      </div>
    </>
  )
}
