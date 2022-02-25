
import { useState } from "react"
function Myform()
{
const[name1,setName1]=useState("default azar");

const showfunction=(event)=>
{
    //alert("test");
    setName1(event.target.value);
}
const handleSubmit=()=>
{
    //event.preventdefault();
    alert("test "+name1);
}
    return(
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name1} onChange={showfunction}></input>            
            <button type="submit">Clickme</button>
            </form>
        </>
    );
}
export default Myform;