import React, { Component } from "react";

import AuthService from "../services/auth-service";

export default class Home extends Component {

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (!user) {
      this.props.history.push("/login");
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Home</h3>
        </header>
      </div>
    );
  }
}