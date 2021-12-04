import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
        <main className="px-8 py-4 bg-mintable-background">{children}</main>
      <Footer />
    </div>
  )
}
