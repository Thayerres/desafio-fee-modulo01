import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Recipes';
import Detais from "./pages/Details";

const Routes:React.FC = () => {
    return (<Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/:recipe">
                <Detais />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes