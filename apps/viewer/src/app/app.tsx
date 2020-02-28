import React, { Component } from 'react';
import { unicornRocket } from '@ra-app/utilities';
import './app.css';


class App extends Component {

  constructor(props: any) {
    super(props);

    // Setup to listen for help helper(s)...
    const src = "http://localhost:4200";

    const msgHandler = function (e) {
      if (e.data && !e.data.action && !e.data.type) {
        console.log("handling specific", e.data);
        const div = document.querySelector(".seekHelp");
        div.innerHTML += e.data;
      }
    };
    window.addEventListener("message", msgHandler, false);

    const postMsgUnload = function (e) {
      console.log("closed-posting?", e);
      e.currentTarget.opener.postMessage("closed", src);
    };
    // when we have closed the window, tell the parent that it is closed.
    window.addEventListener("unload", postMsgUnload, false);

    const postMsgLoad = function (e) {
      console.log("ready-posting?", e);
      const tg = src + "/viewer-app";
      e.currentTarget.opener.postMessage("ready", tg);
    };
    // when we have loaded the window, tell the parent that it is loaded.
    window.addEventListener("load", postMsgLoad, false);
  }


  render() {
    return (
      <div className="app">
        <header className="flex">
          <h1>webViewer-ui simulation {unicornRocket} !</h1>
        </header>
        <div>
          Imagine that this is the webViewer-ui and you wanted help with...
        </div>
          <div className="seekHelp"></div>
      </div>
    );
  }
}

export default App;
