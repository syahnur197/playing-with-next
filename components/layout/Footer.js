import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-mintable-dark-purple py-12 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex flex-col">
            <h2 className="font-bold">Mintable</h2>
            <Link href="/">Join our Community</Link>
          </div>
          <div className="col-span-4">
            <h2 className="font-bold">My Account</h2>
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex flex-col">
                <Link href="/">Join our Community</Link>
                <Link href="/">List an item for sale</Link>
              </div>
              <div className="col-span-1 flex flex-col">
                <Link href="/">My Profile</Link>
                <Link href="/">Browse</Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <h2 className="font-bold">Need Help?</h2>
            <Link href="/">FAQ</Link>
            <Link href="/">Mintable guide</Link>
          </div>
          <div className="col-span-2 flex flex-col">
            <h2 className="font-bold">Buy an Item</h2>
            <Link href="/">Digital Items</Link>
            <Link href="/">Stores</Link>
          </div>
          <div className="col-span-2 flex flex-col">
            <h2 className="font-bold">Legal</h2>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
