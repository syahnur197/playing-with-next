import Link from "next/link"
import { Logo } from "../common/Logo"
import { Search } from "./Search"

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-8 border border-b border-gray-300">
      <div className="flex flex-row">
        <Logo />
        <Search />
      </div>
      <div className="flex flex-row">
        <ul className="flex flex-row gap-8 items-center">
          <li className="text-mintable-gray hover:text-mintable-purple"><Link href="/">Browse</Link></li>
          <li className="text-mintable-gray hover:text-mintable-purple"><Link href="/">Discover</Link></li>
          <li className="text-mintable-gray hover:text-mintable-purple"><Link href="/">Mint an item</Link></li>
          <li className="text-mintable-purple hover:text-mintable-purple font-semibold"><Link href="/">Vote/DAO</Link></li>
          <li className="text-mintable-gray hover:text-mintable-purple"><Link href="/">My Account</Link></li>
          <li>
            <select className="bg-white py-1 px-1 border border-mintable-light-gray rounded-md">
              <option>Ethereum</option>
              <option>Bitcoin</option>
              <option>Litecoin</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}
