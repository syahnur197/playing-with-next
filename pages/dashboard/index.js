import { Card } from "../../components/common/Card"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4">Dashboard</div>

      <Card>
        This is a card content
      </Card>
    </div>
  )
}

export default Dashboard
