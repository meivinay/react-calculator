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
infixEvaluate=()=>{
  let operator = [];
  let operand = [];
  for(let ch in this.state.stmt){
    if(isNaN(this.state.stmt[ch]) === false){
      let integer = parseInt(this.state.stmt[ch]);
      operand.push(integer); 
    }
    else{
    while(operator.length>0 && this.oprPriority(operator[operator.length-1])>= this.oprPriority(this.state.stmt[ch])){
      let b = operand.pop();
      let a = operand.pop();
      let op = operator.pop();
      let res = this.evaluate(a,op,b);
      operand.push(res);
    }
    operator.push(this.state.stmt[ch]);
  }
  }
  while(operator.length>0){
    let b = operand.pop();
    let a = operand.pop();
    let op = operator.pop();
    let res = this.evaluate(a,op,b);
    operand.push(res);
  } 
 return operand.pop();
}
oprPriority = (opr)=>{
  if(opr ==="*" || opr === "/" || opr === "%"){
    return 1;
  }
  else if (opr ==="+" || opr==="-") {
    return 0;
  }
  else{
    return -1;
  }
}
evaluate = (a,op,b)=>{
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
partialReset=(res)=>{
  this.setState({stmt:[],operator:[],operand:[res],isPrevNumNAN:false,posNeg:1});
}
fullReset = ()=>{
  this.setState({stmt:[],operand:[],operator:[],result:"",isPrevNumNAN:true,posNeg:1});
}
handleNumKeys = (value)=>{
  if(this.state.isPrevNumNAN === false){
    let lastNum = this.state.operand.pop();
    this.state.stmt.pop();  
    let newNum = (lastNum*10+value)*this.state.posNeg;
      this.setState({stmt:[...this.state.stmt,newNum],operand:[...this.state.operand,newNum],isPrevNumNAN:false,posNeg:1})
  }
  else{
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
  let res = this.infixEvaluate();
  this.setState({stmt:[res],operator:[],operand:[res],result:res,isPrevNumNAN:false,posNeg:1},()=>{
    console.log("after eval");
    console.log("stmtm => "+this.state.stmt);
    console.log("operand=> "+this.state.operand);
    console.log("operator=> "+this.state.operator);
  });
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
          <div className="option">
            <div className="line" ></div>
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