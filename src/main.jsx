import ReactDOM from "react-dom/client"
import { router } from "./router.jsx"
import { RouterProvider } from "react-router-dom"
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
