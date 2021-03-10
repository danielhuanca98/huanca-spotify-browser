import Categories from "./components/categories/categories";
import Tracklist from './components/tracklist/Tracklist'
import { useEffect, useState } from "react";
import { categories } from "./api/request";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Playlist from './components/playlists/Playlist'

function App(props) {
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (props.token === '') return
        categories(props.token).then((res) => {
            setCategoriesArray(res.data.categories.items);
            setIsLoading(false)
        });
    }, [props.token])


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Categories isLoading={isLoading} array={categoriesArray} token={props.token}/>
                </Route>
                <Route path="/playlists/:id" children={({ match }) => {
                    return <Playlist match={match} token={props.token}/>
                }} />
                <Route path="/tracks/:id" children={({ match }) => {
                    return <Tracklist match={match} token={props.token}/>
                }} />
            </Switch>                    
        </BrowserRouter>
    );
}

export default App;
