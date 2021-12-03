import { Button } from "../components/common/Button";
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Button>
        Hello
      </Button>
      <Link href="/dashboard">Hello</Link>
    </div>
  )
}

export default Home;
