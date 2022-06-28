import {Component} from "react";
//import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';

class FindingDom extends Component{
    constructor() {
        super();
        this.findingDomHandler1 = this.findingDomHandler1.bind(this);
        this.findingDomHandler2 = this.findingDomHandler2.bind(this);

    }
    findingDomHandler1(){
        var myDiv1 = document.getElementById("rat");
        ReactDOM.findDOMNode(myDiv1).style.color = 'red';
    }
    findDomHandler2(){
        var myDiv2 = document.getElementById("dog");
        ReactDOM.findDOMNode(myDiv2).style.color='blue';
    }
    render(){
        return(
            <>
            <h1>React Js Finding Dom Node</h1>
                <button onClick={this.findingDomHandler1}>Finding Dom 1</button>
                <button onClick={this.findingDomHandler2}>Finding Dom 2 </button>
                <h3 id={"rat"}> Rat is here</h3>
                <h3 id={"dog"}> Dog is here</h3>

            </>
        )
    }
}
export default FindingDom;
