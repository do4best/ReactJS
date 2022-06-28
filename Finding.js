import {Component} from "react";

class Finding extends Component{
    constructor() {
        super();
        this.state={
            msg:"Welcome to the world"
        };
        this.updateState = this.updateState.bind(this);

    }
    updateState(){
        this.setState({msg:"This is another Wotlds"});
    }
    render() {
    return(

<>
<h1>{this.state.msg}</h1>
<button onClick={this.updateState}>Set State</button> </>
)
}
}
export default Finding;
