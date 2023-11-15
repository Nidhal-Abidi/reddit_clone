import { useLoaderData } from "react-router-dom"

export function Todos() {
  const todos = useLoaderData()

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <li className="strike-through" key={todo.id}>
                {todo.title}
              </li>
            )
          } else {
            return <li key={todo.id}>{todo.title}</li>
          }
        })}
      </ul>
    </>
  )
}
