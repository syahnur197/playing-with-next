import { CollectorsEvent } from "../components/raffle-reveal-page/CollectorsEvent";
import { GetMoreTickets } from "../components/raffle-reveal-page/GetMoreTickets";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="hidden md:block md:col-span-3">
        <GetMoreTickets />
      </div>
      <div className="col-span-12 md:col-span-9 order-first md:order-last">
        <CollectorsEvent />
      </div>
    </div>
  )
}

export default Home;
