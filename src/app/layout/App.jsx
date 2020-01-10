import React, { Component, Fragment } from "react";
// import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventCheckDashboard from "../../features/event/EventCheck/EventCheckDashboard";
import EventCheck2Dashboard from "../../features/event/EventCheck2/EventCheck2Dashboard";
import EventCompletedRouteDashboard from "../../features/event/EventCompletedRoute/EventCompletedRouteDashboard";
import EventInRouteDashboard from "../../features/event/EventInRoute/EventInRouteDashboard";
import EventInRoute2Dashboard from "../../features/event/EventInRoute2/EventInRoute2Dashboard";

import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Order from "../../features/order/order";
import OrderCheck from "../../features/order/OrderCheck";
import OrderCheck2 from "../../features/order/OrderCheck2";
import DeliveredOrder from "../../features/order/DeliveredOrder";
import DeliveredOrder2 from "../../features/order/DeliveredOrder2";

import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import DetailsRoute from "../../features/route/DetailsRoute";
import Map from "../../features/route/Map";
import Map2 from "../../features/route/Map2";
import RouteTime from "../../features/route/RouteTime";
import RouteTime2 from "../../features/route/RouteTime2";

import Waze from "../../features/route/Waze";
import Waze2 from "../../features/route/Waze2";
import PhotoEmpty from "../../features/delivery/PhotoEmpty";
import PhotoEmpty2 from "../../features/delivery/PhotoEmpty2";
import Photo from "../../features/delivery/Photo";

import Notification from "../../features/event/EventDashboard/Notification";
import Notification2 from "../../features/event/EventDashboard/Notification2";

import Photo2 from "../../features/delivery/Photo2";
import Sign from "../../features/delivery/Sign";
import Sign2 from "../../features/delivery/Sign2";
import SignEmpty from "../../features/delivery/SignEmpty";
import SignEmpty2 from "../../features/delivery/SignEmpty2";
import Profile from "../../features/profile/Profile";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={Order} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/eventinroute" component={EventInRouteDashboard} />
                <Route path="/eventinroute2" component={EventInRoute2Dashboard} />
                {/* <Route path="/events/:id" component={EventDetailedPage} /> */}
                <Route path="/profile" component={Profile} />

                {/* <Route path="/ordercheck" component={OrderCheck} /> */}
                <Route path="/photo" component={Photo} />
                <Route path="/photoempty" component={PhotoEmpty} />
                <Route path="/signempty" component={SignEmpty} />
                <Route path="/sign" component={Sign} />
                <Route path="/photo2" component={Photo2} />
                <Route path="/photoempty2" component={PhotoEmpty2} />
                <Route path="/signempty2" component={SignEmpty2} />
                <Route path="/sign2" component={Sign2} />
                <Route path="/detailsroute" component={DetailsRoute} />
                <Route path="/waze" component={Waze} />
                <Route path="/waze2" component={Waze2} />
                <Route path="/map" component={Map} />
                <Route path="/routetime" component={RouteTime} />
                <Route path="/map2" component={Map2} />
                <Route path="/routetime2" component={RouteTime2} />
                <Route path="/ordercheck" component={OrderCheck} />
                <Route path="/ordercheck2" component={OrderCheck2} />
                <Route path="/deliveredorder" component={DeliveredOrder} />
                <Route path="/notification" component={Notification}/>
                <Route path="/notification2" component={Notification2}/>
                {/* <EventDashboard /> */}
                <Route path="/deliveredorder2" component={DeliveredOrder2} />
                <Route path="/eventcheckdashboard" component={EventCheckDashboard} />
                <Route path="/eventcheck2dashboard" component={EventCheck2Dashboard} />
                <Route path="/eventcompletedroutedashboard" component={EventCompletedRouteDashboard} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
