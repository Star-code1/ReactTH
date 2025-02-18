import React from "react";
import Childcomponent from "./Childcomponent"
class Mycomponent extends React.Component {
    sum = (a, b) => {
        return a + b;
    }
    render() {
       return (
          <div>
            <Childcomponent myProp={parent} sum={this.sum}></Childcomponent>
           </div>
        );
    }
}
export default Mycomponent;
