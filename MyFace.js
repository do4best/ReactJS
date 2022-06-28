import {Component} from "react";

class MyFace extends Component{
    constructor(){
        super();
        this.state={displayBio:false}
        this.toggleButton = this.toggleButton.bind(this)
    }
    toggleButton(){
        this.setState({displayBio: !this.state.displayBio})
    }
    render(){
        const bio=this.state.displayBio ?(
            <div>
                <h3>
                    Hello, nice to meet you but its still a big challenge to understand the basics of everything
                </h3>
                <button onClick={this.toggleButton}> Show Less </button>
            </div>
        ):(
            <div><button onClick={this.toggleButton}>Read More</button> </div>
        );
        return(
            <>
                <h1>Welcome to React World</h1>
                {bio}</>
        )
    }
}
export default MyFace;
