import { CollectorsEvent } from "../components/raffle-reveal-page/collectors-event";
import { GetMoreTickets } from "../components/raffle-reveal-page/get-more-tickets";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <GetMoreTickets />
      </div>
      <div className="col-span-9">
        <CollectorsEvent />
      </div>
    </div>
  )
}

export default Home;
