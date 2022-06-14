import { useEffect, useState } from "react"
import Menu from "../Menu"
import { Logo, LogoBox, Nav, Search, Title } from "./style"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Nav isScrolled={isScrolled}>
      {/* Nav Left */}
      <Link href="/">
        <LogoBox>
          <Logo src="/images/Logo.png" />
          <Title>挖！影</Title>
        </LogoBox>
      </Link>
      <Search>
        <img src="/images/magnifier.png" alt="" />
        <input type="text" placeholder="搜尋劇名 / 演員" />
      </Search>
      {/* Nav Right */}
      <Menu position={"header"} />
    </Nav>
  )
}

export default Header
