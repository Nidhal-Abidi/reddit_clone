import { Navigate, createBrowserRouter } from "react-router-dom"
import { Posts } from "./pages/Posts"
import { Users } from "./pages/Users"
import { Todos } from "./pages/Todos"
import { RootLayout } from "./layouts/RootLayout"
import {
  postLoader,
  postsLoader,
  todosLoader,
  userLoader,
  usersLoader,
} from "./loaders"
import { Post } from "./pages/Post"
import { User } from "./pages/User"
import { ErrorPage } from "./pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="posts" /> },
          {
            path: "posts",
            element: <Posts />,
            loader: postsLoader,
          },
          { path: "posts/:postId", element: <Post />, loader: postLoader },
          { path: "users", element: <Users />, loader: usersLoader },
          { path: "users/:userId", element: <User />, loader: userLoader },
          { path: "todos", element: <Todos />, loader: todosLoader },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
  },
])
