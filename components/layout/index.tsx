import Header from "./Header"
import Menu from "./Menu"

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Menu position={"bottom"} />
    </>
  )
}

export default Layout
