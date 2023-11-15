import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

export function User() {
  const {
    id: userId,
    name,
    email,
    company: { name: companyName },
    website,
    address,
  } = useLoaderData()
  const [todos, setTodos] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Promise.all([getPosts(userId), getTodos(userId)]).then(
      ([postsData, todosData]) => {
        //console.log(postsData)
        //console.log(todosData)
        setPosts(postsData)
        setTodos(todosData)
      }
    )
  }, [userId])

  return (
    <>
      <h1 className="page-title"> {name} </h1>
      <div className="page-subtitle"> {email} </div>
      <div>
        <b>Company:</b> {companyName}
      </div>
      <div>
        <b>Website:</b> {website}
      </div>
      <div>
        <b>Address:</b>
        {` ${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.length == 0 ? (
          <h4>No posts for {name}</h4>
        ) : (
          posts.map((post) => {
            return (
              <div className="card" key={post.id}>
                <div className="card-header"> {post.title} </div>
                <div className="card-body">
                  <div className="card-preview-text"> {post.body} </div>
                </div>
                <div className="card-footer">
                  <Link className="btn" to={`/posts/${post.id}`}>
                    View
                  </Link>
                </div>
              </div>
            )
          })
        )}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.length === 0 ? (
          <h4>No todos for {name}!</h4>
        ) : (
          todos.map((todo) => {
            if (todo.completed) {
              return (
                <li className="strike-through" key={todo.id}>
                  {todo.title}
                </li>
              )
            } else {
              return <li key={todo.id}>{todo.title}</li>
            }
          })
        )}
      </ul>
    </>
  )
}

async function getTodos(userId) {
  const resp = await fetch(`http://127.0.0.1:3000/todos?userId=${userId}`)
  if (!resp.ok) {
    return new Error("Cannot fetch the todos of this user!")
  }
  return resp.json()
}

async function getPosts(userId) {
  const resp = await fetch(`http://127.0.0.1:3000/posts?userId=${userId}`)
  if (!resp.ok) {
    return new Error("Cannot fetch the posts of this user!")
  }
  return resp.json()
}
