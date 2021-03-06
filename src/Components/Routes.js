import React from "react";
import Proptype from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";
const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore}/>
        <Route path="/search" component={Search}/>
        <Route path="/:userName" component={Profile}/>
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);


const AppRouter = ({isLoggedIn}) => (
    isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>
);

AppRouter.Proptype = {
    isLoggedIn: Proptype.bool.isRequired
}

export default AppRouter;