import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Todo } from "../components/screens/todo"
import { Member } from "../components/screens/members"
import { Home } from "../components/screens/home"

export const router = (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todo" component={Todo} />
      <Route path="/members" component={Member} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
)

export default router