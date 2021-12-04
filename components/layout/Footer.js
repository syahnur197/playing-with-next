import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-mintable-dark-purple py-12 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <img src="/mintable-logo.png" className="h-10 w-10"/>
              <h2 className="text-xl">Mintable</h2>
            </div>
            <Link href="/"><a className="font-bold">Join our Community</a></Link>
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <h2 className="font-bold">My Account</h2>
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex flex-col gap-4">
                <Link href="/">Join our Community</Link>
                <Link href="/">List an item for sale</Link>
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <Link href="/">My Profile</Link>
                <Link href="/">Browse</Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h2 className="font-bold">Need Help?</h2>
            <Link href="/">FAQ</Link>
            <Link href="/">Mintable guide</Link>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h2 className="font-bold">Buy an Item</h2>
            <Link href="/">Digital Items</Link>
            <Link href="/">Stores</Link>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h2 className="font-bold">Legal</h2>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
