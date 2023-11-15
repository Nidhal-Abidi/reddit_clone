import { Link } from "react-router-dom"

export function ErrorPage() {
  return (
    <>
      <h2>Error 404</h2>
      <Link to="/posts">Back to the posts</Link>
    </>
  )
}
