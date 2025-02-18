import React from "react";
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput : 'abc'
        }
    }
    render() {
        return (
            <>
                <h1>
                   {this.props.sum(6, 7)}
                </h1>
                <div>
                    <input type="text" value={this.state.valueInput} name="" id="" />
                </div>
            </>
        );
    };
}
export default Childcomponent;
