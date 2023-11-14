import { Navigate, createBrowserRouter } from "react-router-dom"
import { Posts } from "./pages/Posts"
import { Users } from "./pages/Users"
import { Todos } from "./pages/Todos"
import { RootLayout } from "./layouts/RootLayout"
import { postsLoader, todosLoader, usersLoader } from "./loaders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "posts", element: <Posts />, loader: postsLoader },
      { path: "users", element: <Users />, loader: usersLoader },
      { path: "todos", element: <Todos />, loader: todosLoader },
      { path: "*", element: <Navigate to="posts" /> },
    ],
  },
])
