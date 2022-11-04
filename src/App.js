
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Home from './Home';
import ChatRoom from './ChatRoom.';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:id' component={ChatRoom} />
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
