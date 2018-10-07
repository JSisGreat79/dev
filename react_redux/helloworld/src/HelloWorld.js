import React, { Component } from "react";
import {store} from "./store";

const currentState =  store.getState();

class HelloWorld extends Component {

  render() {
    return <h1>Hello World {currentState.tech}</h1>
  }
}

export default HelloWorld;
