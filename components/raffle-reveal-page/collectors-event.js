import Link from "next/link"
import { Button } from "../common/Button"

export const CollectorsEvent = () => {
  return (
    <div className="border border-gray-200 rounded-md shadow-md">
      <div className="py-4 px-28">
        <div className="text-center my-4">
          <h1 className="text-3xl font-bold">Collectors Event</h1>
          <p className="text-xl">Participate and win high quality curated NFTs</p>
        </div>

        <div className="border-4 border-dashed py-12 rounded-md border-mintable-light-purple flex flex-col">
          <div className="bg-mintable-light-purple p-4 inline-block rounded-md self-start mx-auto my-4">
            <div className="px-24 py-44 border-2 border-white rounded-md"></div>
          </div>
          <p className="font-semibold text-mintable-light-gray text-center">Drag a ticket or use the button below to draw your tickets</p>
        </div>
      </div>

      <div className="border-t-2 border-mintable-light-purple py-8 flex flex-row px-8 justify-between">
        <div className="flex flex-row gap-8">
          <img src="/ticket.png"/>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Draw Tickets</h2>
            <p className="text-mintable-light-gray"><span className="font-bold text-black">10</span> Tickets found</p>

            <p className="mt-4 w-4/5">
              Open your tickets and get a change to win $1000 worth of high quality NFTs! <Link href="/"><a className="text-mintable-purple">Learn More</a></Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <select className="border border-mintable-light-purple py-2 px-2 bg-white">
            <option>Silver Ticket (1)</option>
          </select>
          <Button className="px-16 py-2 text-lg">Draw a Ticket</Button>
        </div>
      </div>
    </div>
  )
}
