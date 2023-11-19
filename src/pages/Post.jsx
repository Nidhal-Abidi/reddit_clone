import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

export function Post() {
  const post = useLoaderData()
  const [userData, setUserData] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {
    Promise.all([getUser(post.userId), getComments(post.id)])
      .then(([userInfo, commentsData]) => {
        //console.log("userData", userInfo)
        //console.log("commentsData", commentsData)
        setUserData(userInfo)
        setComments(commentsData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [post.userId, post.id])
  return (
    <>
      <h1 className="page-title">
        {post.title}
        <div className="title-btns">
          <Link className="btn btn-outline" to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
        </div>
      </h1>

      <span className="page-subtitle">
        By: <Link to={`/users/${post.userId}`}>{userData?.name}</Link>
      </span>
      <div> {post.body} </div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.length == 0 ? (
          <h5>No comments Found!</h5>
        ) : (
          comments.map((comment) => {
            return (
              <div className="card" key={comment.id}>
                <div className="card-body">
                  <div className="text-sm mb-1"> {comment.email} </div>
                  {comment.body}
                </div>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}
async function getUser(userId) {
  const resp = await fetch(`http://127.0.0.1:3000/users/${userId}`)
  if (!resp.ok) {
    throw Error("Can't fetch the user's data")
  } else {
    return resp.json()
  }
}

async function getComments(postId) {
  const resp = await fetch(`http://127.0.0.1:3000/posts/${postId}/comments`)
  if (!resp.ok) {
    throw Error("Can't fetch the comments of this post")
  } else {
    return resp.json()
  }
}
