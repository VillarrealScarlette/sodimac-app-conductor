import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };
  render() {
    return (
      <Menu inverted fixed="bottom">
        <Container>
          <Menu.Item as={NavLink} exact to="/detailsroute" header>
            <img src="assets/volver.svg" alt="logo" />
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="assets/perfil.svg" alt="logo" />
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/map" header>
            <img src="assets/mapa.svg" alt="logo" />
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" header>
            <img src="assets/pedidos.svg" alt="logo" />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
