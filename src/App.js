import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlbumList from "./components/AlbumList";
import Album from "./components/Album";

import './App.css';

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <AlbumList />
          </Route>
          <Route path="/album/:id">
            <Album/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
