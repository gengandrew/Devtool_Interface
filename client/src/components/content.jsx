import React, { Component } from "react";
import Navbar from "./navbar";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Content extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <Navbar />
        <button className="btn btn-primary">
          <a href="http://localhost:5000/api/getAll">Widget</a>
        </button>
      </div>
    );
  }
}

export default Content;
