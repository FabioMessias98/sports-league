import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Schedule} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/schedule" component={Schedule} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default App;