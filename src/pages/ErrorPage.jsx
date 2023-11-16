import { Link, useRouteError } from "react-router-dom"

export function ErrorPage() {
  const error = useRouteError()
  return (
    <>
      <h2>Error - Something went wrong</h2>
      <Link to="/posts">Back to the posts</Link>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre> {error?.message} </pre>
          <pre> {error?.stack} </pre>
        </>
      )}
    </>
  )
}
