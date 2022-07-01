import { useEffect, useState } from "react"
import Menu from "../Menu"
import { Logo, LogoBox, Nav, Search, Title } from "./style"
import Link from "next/link"
import { NextImage } from "../../shared/NextImage/style"

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
          <Logo src="/images/Logo.png" width={38} height={38} />
          <Title>挖！影</Title>
        </LogoBox>
      </Link>
      <Search>
        <NextImage
          src="/images/magnifier.png"
          objectFit="cover"
          width={17}
          height={17}
        />
        <input type="text" placeholder="搜尋劇名 / 演員" />
      </Search>
      {/* Nav Right */}
      <Menu position={"header"} />
    </Nav>
  )
}

export default Header
