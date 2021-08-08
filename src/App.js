import React from "react";
import style from "./style.css"
import Numpad from "./Numpad";
// import OperatorPad from "./OperatorPad";
import HorizontalOperatorPad from "./HorizontalOperatorPad";
import VerticalOperatorPad from "./VerticalOperatorPad";
class App extends React.Component{
  state = {
    stmt:[],
    operator:[],
    operand:[],
    isPrevNumNAN:undefined,
    posNeg:1,
    result:""
  }
evaluate=()=>{
  // console.log(this.state.stmt);
  // console.log(this.state.operator);
  // console.log(this.state.operand);
  let b = this.state.operand.pop();
  let a = this.state.operand.pop();
  let op = this.state.operator.pop();
  // let prevRes = this.state.result;
  if(op==="+"){
    return (a+b);
  }
  else if(op=== "-"){
    return (a-b);
  }
  else if(op=== "*"){
    return (a*b);
  }
  else if(op=== "/"){
    return (a/b);
  }
  else if(op === "%"){
    return(a%b);
  }
}
partialReset=()=>{
  this.setState({stmt:[],operator:[],operand:[],isPrevNumNAN:true,posNeg:1});
}
fullReset = ()=>{
  this.setState({stmt:[],operand:[],operator:[],result:"",isPrevNumNAN:true,posNeg:1});
}
handleNumKeys = (value)=>{
  if(this.state.isPrevNumNAN === false){
    let lastNum = this.state.operand.pop();
    let newNum = (lastNum*10+value)*this.state.posNeg;
    console.log(newNum +"mul val");
      this.setState({stmt:[...this.state.stmt,value],operand:[...this.state.operand,newNum],isPrevNumNAN:false,posNeg:1})
  }
  else{
    console.log("single val");
    value = value*this.state.posNeg;
    this.setState({stmt:[...this.state.stmt,value],operand:[...this.state.operand,value],isPrevNumNAN:false,posNeg:1})
  }
}
handleOperatorKeys = (op)=>{
  if(this.state.isPrevNumNAN === false){
    this.setState({stmt:[...this.state.stmt,op],operator:[...this.state.operator,op],isPrevNumNAN:true});
  }
  else {
    alert("Please Enter Valid input"); 
  }
}
handlePosNeg= ()=>{
  if(this.state.posNeg >0){
    console.log("+ve");
    this.setState({posNeg:-1});
  }
  else{
    console.log("-ve");
    this.setState({posNeg:1});
  }
}
handleEvalAction = ()=>{
  let res = this.evaluate();
  this.setState({result:res})
  this.partialReset();
}
handleResetAction = ()=>{
  this.fullReset();
}
  render = ()=>{
    return(
      <div className="calculator-container">
        <div className ="header">
        <div className="view">
          {this.state.stmt} 
        </div>
        <div className="output">
            {this.state.result}
          </div>
        </div>

        <div className="keypad-container">
          <div className ="keypad-row">
         <HorizontalOperatorPad
           handleResetAction = {this.handleResetAction}
           handlePosNeg = {this.handlePosNeg}
           handleOperatorKeys = {this.handleOperatorKeys}></HorizontalOperatorPad>
       <Numpad handleNumKeys = {this.handleNumKeys}></Numpad>
          </div>
          <div className="keypad-column">
          <VerticalOperatorPad
          handleOperatorKeys = {this.handleOperatorKeys}
          handleEvalAction = {this.handleEvalAction}></VerticalOperatorPad>

          </div>
          </div>     
        </div>
    )
  }

}

export default App