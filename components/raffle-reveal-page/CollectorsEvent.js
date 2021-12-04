import Link from "next/link"
import { Button } from "../common/Button"
import { FakeCard } from "./FakeCard"
import { GetMoreTickets } from "./GetMoreTickets"

export const CollectorsEvent = () => {
  return (
    <div className="md:border border-gray-200 rounded-md md:shadow-md">
      <div className="md:py-4 md:px-28 px-2">
        <div className="text-center my-4">
          <h1 className="text-xl md:text-3xl font-bold">Collectors Event</h1>
          <p className="text-sm md:text-xl">Participate and win high quality curated NFTs</p>
        </div>

        <div className="border-4 border-dashed py-2 md:py-12 px-8 rounded-md border-mintable-light-purple flex flex-col">
          <FakeCard />
          <p className="text-xs md:text-base font-semibold text-mintable-light-gray text-center">Drag a ticket or use the button below to draw your tickets</p>
        </div>
      </div>

      <div className="block md:hidden">
        <GetMoreTickets />
      </div>

      <div className="border-t-2 border-mintable-light-purple py-8 flex-col flex md:flex-row px-8 justify-between">
        <div className="flex flex-col md:flex-row gap-8 mb-4 md:mb-0">
          <img src="/ticket.png" className="self-center"/>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold text-lg">Draw Tickets</h2>
            <p className="text-mintable-light-gray"><span className="font-bold text-black">10</span> Tickets found</p>

            <p className="mt-4 w-4/5 text-center md:text-left text-sm md:text-base">
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
