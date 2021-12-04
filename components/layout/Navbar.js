import Link from "next/link"
import { Search } from "./Search"

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-4 md:px-8 border border-b border-gray-300">
      <div className="flex flex-row md:gap-4 gap-2">
        <img src="/mintable-logo.png" className="h-10 w-10" />
        <Search />
      </div>
      <div className="md:hidden flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="hidden md:flex md:flex-row">
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
