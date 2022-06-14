import { NavMenu, UserImg } from "./style"
import Link from "next/link"

interface Props {
  position: string
}

const Menu = ({ position }: Props) => {
  return (
    <NavMenu position={position}>
      <div>
        <Link href="/search">
          <a>
            <span>電影</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/search">
          <a>
            <span>戲劇</span>
          </a>
        </Link>
      </div>
      <div>
        <a>
          <span>主題館</span>
        </a>
      </div>
      <div>
        <a>
          <span>我的片單</span>
        </a>
      </div>
      <UserImg src="/images/title-profile-pc.png" />
    </NavMenu>
  )
}

export default Menu
