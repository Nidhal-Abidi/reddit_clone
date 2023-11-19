//Get all posts
export async function postsLoader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams
  const query = searchParams.get("query") || ""
  const userId = searchParams.get("userId") || ""

  let endPoint = `http://127.0.0.1:3000/posts?q=${query}`
  if (userId !== "") {
    endPoint += `&userId=${userId}`
  }
  const resp = await fetch(endPoint, { signal })
  if (resp.ok) {
    return {
      searchParams: { query, userId },
      posts: await resp.json(),
    }
  }
  throw new Error("Cannot fetch all the posts!")
}

//Get a specific post
export async function postLoader({ params, request: { signal } }) {
  const resp = await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    signal,
  })
  if (resp.ok) return resp.json()
  throw new Error(`Cannot fetch the post with id=${params.postId}!`)
}

//Get all users
export async function usersLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/users", { signal })
  if (resp.ok) return resp.json()
  throw new Error("Cannot fetch all the users!")
}

//Get a specific user
export async function userLoader({ params, request: { signal } }) {
  const resp = await fetch(`http://127.0.0.1:3000/users/${params.userId}`, {
    signal,
  })
  if (resp.ok) return resp.json()
  throw new Error(`Cannot fetch the user with id=${params.userId}!`)
}

//Get all todos.
export async function todosLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/todos", { signal })
  if (resp.ok) return resp.json()
  throw new Error(`Cannot fetch all the todos!`)
}
