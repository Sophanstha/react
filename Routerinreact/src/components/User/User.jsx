import React from "react";
import { useParams } from "react-router-dom";
function User(){
  let {userid} = useParams()  
return(
    <>
    <h1 className="bg-slate-700 text-slate-300 p-10 text-center" >
        User : {userid}
    </h1>
    </>
)
}
export default User