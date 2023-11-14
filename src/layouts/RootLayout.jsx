import { Outlet } from "react-router-dom"

export function RootLayout() {
  return (
    <>
      <h3>Navbar</h3>
      <Outlet />
    </>
  )
}
