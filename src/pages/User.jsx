import { Link, useLoaderData } from "react-router-dom"

export function User() {
  const {
    name,
    email,
    company: { name: companyName },
    website,
    address,
  } = useLoaderData()
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
        <div className="card">
          <div className="card-header">Title of the post</div>
          <div className="card-body">
            <div className="card-preview-text">Body of the post</div>
          </div>
          <div className="card-footer">
            <Link className="btn" href="#">
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
