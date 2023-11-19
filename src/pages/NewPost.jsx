import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom"

export function NewPost() {
  const formSubmissionErrors = useActionData()

  const { state } = useNavigation()
  const isSubmitting = state == "submitting" || state == "loading"

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div
            className={`form-group ${
              formSubmissionErrors?.title != undefined ? "error" : ""
            }`}
          >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            {formSubmissionErrors?.title != undefined && (
              <div className="error-message">{formSubmissionErrors?.title}</div>
            )}
          </div>
          <div
            className={`form-group ${
              formSubmissionErrors?.user != undefined ? "error" : ""
            }`}
          >
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </select>
            {formSubmissionErrors?.user != undefined && (
              <div className="error-message">{formSubmissionErrors?.user}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div
            className={`form-group ${
              formSubmissionErrors?.body != undefined ? "error" : ""
            }`}
          >
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body"></textarea>
            {formSubmissionErrors?.body != undefined && (
              <div className="error-message">{formSubmissionErrors?.body}</div>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Cancel
          </Link>
          <button className="btn" disabled={isSubmitting}>
            Save
          </button>
        </div>
      </Form>
    </>
  )
}

export async function newPostAction({ request }) {
  const formData = await request.formData()

  const submissionData = {
    title: formData.get("title"),
    userId: parseInt(formData.get("userId")),
    body: formData.get("body"),
  }
  let errors = {}
  if (submissionData.title.length == 0) {
    errors["title"] = "Title is required"
  }
  if (submissionData.userId.length == 0) {
    errors["user"] = "User is required"
  }
  if (submissionData.body.length == 0) {
    errors["body"] = "Body is required"
  }
  if (Object.keys(errors).length != 0) {
    return errors
  }

  // Create a new Post
  const resp = await fetch("http://127.0.0.1:3000/posts", {
    method: "post",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submissionData),
  })

  const newPost = await resp.json()
  return redirect(`/posts/${newPost.id}`)
}
