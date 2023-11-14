import { Link } from "react-router-dom"

export function PostCard({ title, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to="#">
          View
        </Link>
      </div>
    </div>
  )
}
