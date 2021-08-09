let Numpad = (props)=>{
    return(
     <div className="operand-container">
     <div id="row-1">
     <button onClick={()=>{
       props.handleNumKeys(1);  
   }}>
       1
    </button>
     <button onClick = {()=>{
       props.handleNumKeys(2);  
       
     }}>2</button>
     <button onClick ={()=>{
       props.handleNumKeys(3);  
       
     }}>3</button>
     </div>
   <div id="row-2">
   <button onClick = {()=>{
       props.handleNumKeys(4);  
     }}>4</button>
     <button onClick = {()=>{
              props.handleNumKeys(5);  
     }}>5</button>
     <button onClick = {()=>{
                     props.handleNumKeys(6);  
     }}>6</button>
   </div>
   <div id="row-3">
   <button onClick = {()=>{
       props.handleNumKeys(7);
     }}>7</button>
     <button onClick = {()=>{
       props.handleNumKeys(8);
     }}>8</button>
     <button onClick = {()=>{
       props.handleNumKeys(9);
     }}>9</button>
   </div>
   <button onClick ={()=>{
       props.handleNumKeys(0);
     }}>0</button>
   </div>
 )
 }

 export default Numpad;