import { useLoaderData } from "react-router-dom"
import { UserCard } from "../components/UserCard"

export function Users() {
  const users = useLoaderData()
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />
        })}
      </div>
    </>
  )
}
