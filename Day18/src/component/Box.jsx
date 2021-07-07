function Box(props) {
    console.log(props.even,props.index)
   if (props.even) {   
       return(
           <div className="box" style={ {backgroundColor: props.index%2 === 0 ? "black" :"white"}}>
               {props.index}
           </div>
       )
   }else {
    return(
        <div className="box" style={ {backgroundColor: props.index%2 === 0 ? "white" :"black"}}>
        </div>
    )
   }
}

export default Box;
// ((8<value<=16) || (24<value<=32) || (40<value<=48) || (56<value<=64 ))