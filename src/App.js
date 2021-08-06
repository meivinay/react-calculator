import React from "react";
import style from "./style.css"
import Numpad from "./Numpad";
import OperatorPad from "./OperatorPad";
class App extends React.Component{
  state = {
    stmt:[],
    operator:[],
    operand:[],
    isPrevNumNAN:undefined,
    result:""
  }
evaluate=()=>{
  console.log(this.state.stmt);
  console.log(this.state.operator);
  console.log(this.state.operand);
  let b = this.state.operand.pop();
  let a = this.state.operand.pop();
  let op = this.state.operator.pop();
  let prevRes = this.state.result;
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
}
partialReset=()=>{
  this.setState({stmt:[],operator:[],operand:[],isPrevNumNAN:true});
}
fullReset = ()=>{
  this.setState({stmt:[],operand:[],operator:[],result:"",isPrevNumNAN:true});
}
handleNumKeys = (value)=>{
  if(this.state.isPrevNumNAN === false){
    let lastNum = this.state.operand.pop();
    let newNum = lastNum*10+value;
    console.log(newNum +"mul val");
      this.setState({stmt:[...this.state.stmt,value],operand:[...this.state.operand,newNum],isPrevNumNAN:false})
  }
  else{
    console.log("single val");
    this.setState({stmt:[...this.state.stmt,value],operand:[...this.state.operand,value],isPrevNumNAN:false})
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
        <div className="view">
          {this.state.stmt} 
        </div>
        <div className="output">
            {this.state.result}
          </div>
        <div className="keypad-container">
       <Numpad handleNumKeys = {this.handleNumKeys}></Numpad>
       <OperatorPad 
       handleOperatorKeys = {this.handleOperatorKeys}
       handleEvalAction = {this.handleEvalAction}
       handleResetAction = {this.handleResetAction}
       ></OperatorPad>
        </div>
      </div>
    )
  }

}

export default App