import React from "react";

import AppContext from "./context";
import AppContainer from "./navigation";
import * as util from "./utilities";
import  navigationRef   from './navigation/index'
class Decider extends React.Component {
  render() {
    return (
      <AppContext.Provider value="">
        <AppContainer
        />
      </AppContext.Provider>
    );
  }
}
// eslint-disable-next-line

export default Decider