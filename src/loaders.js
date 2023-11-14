//Get all posts
export async function postsLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/posts?_limit=6", { signal })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}

//Get a specific post
export async function postLoader({ params, request: { signal } }) {
  const resp = await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    signal,
  })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}

//Get all users
export async function usersLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/users?_limit=6", { signal })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}

//Get a specific user
export async function userLoader({ params, request: { signal } }) {
  const resp = await fetch(`http://127.0.0.1:3000/users/${params.userId}`, {
    signal,
  })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}

//Get all todos.
export async function todosLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/todos?_limit=24", { signal })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}
