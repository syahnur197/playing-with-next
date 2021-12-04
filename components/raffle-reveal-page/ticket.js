import { Badge } from "../common/Badge"

export const Ticket = ({ src, number }) => {
  return (
    <div className="self-start relative mx-auto">
      <img src={src} className="h-32 md:h-56 opacity-30 z-20"/>
      <Badge className="absolute -top-3 -right-3 z-30">{number}</Badge>
    </div>
  )
}
