let OperatorPad = (props)=>{
    return(
        <div className="operator-container">
        <button onClick = {()=>{
            props.handleOperatorKeys("+");
        }}>+</button>
        <button onClick = {()=>{
          props.handleOperatorKeys("-");
        }}>-</button>
        <button onClick = {()=>{
          props.handleOperatorKeys("*");
        }}>*</button>
        <button onClick = {()=>{
          props.handleOperatorKeys("/");
        }}>/</button>
        <button onClick = {()=>{
         props.handleEvalAction();
        }}>=</button>
        <button id ="reset"onClick={()=>{
            props.handleResetAction();
        }}>RESET</button>
      </div>
    )
}

export default OperatorPad