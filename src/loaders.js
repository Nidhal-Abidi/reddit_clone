export async function postsLoader({ request: { signal } }) {
  const resp = await fetch("http://127.0.0.1:3000/posts?_limit=6", { signal })
  if (resp.ok) return resp.json()
  //throw redirect("/poss")
}
