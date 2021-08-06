let HorizontalOperatorPad = (props)=>{
   return (
   <div className="horizontal-operators">
         <button id ="reset"onClick={()=>{
            props.handleResetAction();
        }}>C</button>
        <button className = "operator" onClick = {()=>{
          props.handlePosNeg();
        }}>+/-</button>
        <button className = "operator" onClick ={()=>{
          props.handleOperatorKeys("%");
        }}>%</button>
    </div>
    )
}

export default HorizontalOperatorPad;