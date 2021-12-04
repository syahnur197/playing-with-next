import { Button } from '../common/Button'
import { Ticket } from './ticket'

export const GetMoreTickets = () => {
  return (
    <div className="border border-gray-200 rounded-md shadow-md">
      <div className="flex flex-row items-center justify-between py-4 px-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">Get More Tickets</h2>
        <Button className="py-2 px-8 rounded-md">Buy</Button>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <Ticket src="/mintables/silver.png" number={1} />
        <Ticket src="/mintables/gold.png" number={3} />
        <Ticket src="/mintables/diamond.png" number={4} />
      </div>
    </div>
  )
}
