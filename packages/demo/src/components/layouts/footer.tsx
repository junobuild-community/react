import { FC } from "react"
import { Link } from "react-router-dom"

export const Footer: FC = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/todo">Todo</Link> | <Link to="/members">Members</Link>
    </div>
  )
}
