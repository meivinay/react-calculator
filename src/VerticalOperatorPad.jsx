let VerticalOperatorPad = (props)=>{
return(
    <div className="operator-container">
    <button className = "operator vertical-operator" onClick = {()=>{
      props.handleOperatorKeys("/");
    }}>/</button>
  <button className = "operator vertical-operator" onClick = {()=>{
    props.handleOperatorKeys("*");
  }}>*</button>
   <button className = "operator vertical-operator" onClick = {()=>{
    props.handleOperatorKeys("+");
  }}>+</button>
  <button className = "operator vertical-operator" onClick = {()=>{
    props.handleOperatorKeys("-");
  }}>-</button>
  <button className = "operator vertical-operator" id="evaluate" onClick = {()=>{
   props.handleEvalAction();
  }}>=</button>
</div>
)
}

export default VerticalOperatorPad;