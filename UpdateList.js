import {Component} from "react";

class UpdateList extends Component{
    constructor() {
        super();
        this.forceUpdateState = this.forceUpdateState.bind(this);

    }
    forceUpdateState(){
        this.forceUpdate();
    };
    render(){
        return(
            <>
                <h1>Example to Generate Random Number</h1>
                <h3>Random Number: {Math.random()}</h3>
            <button onClick={this.forceUpdateState}>Force Update</button> </>
        )
    }
}
export default UpdateList;
