import React, { Component, Fragment } from "react";
// import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Order from "../../features/order/order";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
//import EventForm from "../../features/event/EventForm/EventForm";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import DetailsRoute from "../../features/route/DetailsRoute";
import Map from "../../features/route/Map";
import RouteTime from "../../features/route/RouteTime";
import OrderCheck from "../../features/order/OrderCheck";
import OrderPhoto from "../../features/order/OrderPhoto";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path ="/order" component={ Order}/>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                {/* <Route path="/events/:id" component={EventDetailedPage} /> */}
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                {/* <Route path="/events" component={EventDashboard} /> */}
                {/*<Route path="/createevent" component={EventForm} />*/}
                <Route path="/detailsroute" component={DetailsRoute} />
                <Route path="/detailsroute" component={DetailsRoute} />
                <Route path="/map" component={Map} />
                <Route path="/routetime" component={RouteTime} />
                <Route path="/ordercheck" component={OrderCheck} />
                <Route path="/orderphoto" component={OrderPhoto} />
                {/* <EventDashboard /> */}
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
