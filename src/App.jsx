import { Route, Switch } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from "./pages/Home";

export default function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route component={NotFound}/>
    </Switch>
  );
}
