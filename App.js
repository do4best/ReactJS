import MyFace from "./MyFace";
import './App.css';
import {Component} from "react";
import Finding from "./Finding";
import UpdateList from "./UpdateList";
import FindingDom from "./FindingDom";
import Excellent from "./Excellent";
import FormEmter from "./FormEmter";
class App extends Component{
constructor() {
    super();
    this.state = {
        data:[{"name":"Meer"},{"name":"Afzal"},{"name":"King"},{"name":"Shah"}]
    }
}
    render(){

        return (<>
            <h1 className={"bg-primary text-center text-white p-3 "}> Hello Friend</h1>

            <ol>
                {this.state.data.map((item) => <List data={item} />)}
            </ol>
<MyFace />
            <Finding />
            <UpdateList />
            <Excellent/>
        <FormEmter /></>  );
    }
}
class List extends Component{
    render(){
        return(
            <ol>
                <li>{this.props.data.name}</li>
            </ol>
        )
    }
}

export default App;
