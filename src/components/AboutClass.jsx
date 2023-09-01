import React,  { Component } from "react";
class AboutClass extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            work:this.props.work
        }
    }
    clickevent(){
        console.log("hii")
        this.setState({
            name:"srinithi",
            work:"student",
            count:this.state.count+=1
        })
    }
    mouseoverevent(){
        console.log("mouse is hovered")
    }
        render(){
           // this.state.name = "About Class Components"
            return(
                <div>
                  AboutClass
                  <b>name:{this.state.name}</b><br></br>
                  <b>work:{this.state.work}</b><br></br>
                  <b>count:{this.state.count}</b><br></br>
                  <button onClick={()=>this.clickevent()}
                  onMouseOver={()=>this.mouseoverevent()}>Click</button>
                </div>
            )
        }
    }  
export default AboutClass

 
