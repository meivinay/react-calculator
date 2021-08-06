let VerticalOperatorPad = (props)=>{
return(
    <div className="operator-container">
    <button className = "operator" onClick = {()=>{
      props.handleOperatorKeys("/");
    }}>/</button>
  <button className = "operator" onClick = {()=>{
    props.handleOperatorKeys("*");
  }}>*</button>
   <button className = "operator" onClick = {()=>{
    props.handleOperatorKeys("+");
  }}>+</button>
  <button className = "operator" onClick = {()=>{
    props.handleOperatorKeys("-");
  }}>-</button>
  <button className = "operator" onClick = {()=>{
   props.handleEvalAction();
  }}>=</button>
</div>
)
}

export default VerticalOperatorPad;