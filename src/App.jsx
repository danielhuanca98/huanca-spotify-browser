import Categories from "./components/categories/categories";
import Tracklist from "./components/tracklist/Tracklist";
import TokenProvider from "./TokenProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.sass";

import Playlist from "./components/playlists/Playlist";

function App() {
    return (
        <TokenProvider>
            <div className="App">
                <div className="content">
                    <Header />
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                <Categories />
                            </Route>
                            <Route
                                path="/playlists/:id"
                                children={({ match }) => {
                                    return <Playlist match={match} />;
                                }}
                            />
                            <Route
                                path="/tracks/:id"
                                children={({ match }) => {
                                    return <Tracklist match={match} />;
                                }}
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </TokenProvider>
    );
}

export default App;
