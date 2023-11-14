import { Navigate, createBrowserRouter } from "react-router-dom"
import { Posts } from "./pages/Posts"
import { Users } from "./pages/Users"
import { Todos } from "./pages/Todos"
import { RootLayout } from "./layouts/RootLayout"
import { postsLoader } from "./loaders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "posts", element: <Posts />, loader: postsLoader },
      { path: "users", element: <Users /> },
      { path: "todos", element: <Todos /> },
      { path: "*", element: <Navigate to="posts" /> },
    ],
  },
])
